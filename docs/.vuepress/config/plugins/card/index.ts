import yaml from "js-yaml";

export const CARD_LIST = "cardList";
export const CARD_IMG_LIST = "cardImgList";

// 渲染md容器的卡片列表
export function renderCardList(tokens, idx, type, base = "") {
  const END_TYPE = `container_${type}_close`,
    _tokens$idx = tokens[idx],
    nesting = _tokens$idx.nesting,
    info = _tokens$idx.info;

  if (nesting === 1) {
    // 渲染开头的 ':::' 标记
    let yamlStr = "";

    for (let i = idx; i < tokens.length; i++) {
      let _tokens$i = tokens[i],
        type = _tokens$i.type,
        content = _tokens$i.content,
        _info = _tokens$i.info;
      if (type === END_TYPE) break; // 遇到结束的 ':::' 时
      if (!content) continue;
      if (type === "fence" && _info === "yaml") {
        // 是代码块类型，并且是yaml代码
        yamlStr = content;
      }
    }

    if (yamlStr) {
      // 正确解析出yaml字符串后
      const dataObj = yaml.load(yamlStr); // 将yaml字符串解析成js对象
      let dataList: any[] = [];
      let config = {};

      if (dataObj) {
        // 正确解析出数据对象
        if (Array.isArray(dataObj)) {
          dataList = dataObj;
        } else {
          config = dataObj.config;
          dataList = dataObj.data;
        }
      }

      if (dataList && dataList.length) {
        // 有列表数据

        // 每行显示几个
        let row = Number(info.split(" ").pop());
        if (!row || row > 4 || row < 1) {
          row = 3; // 默认 3
        }

        let listDOM = "";
        if (type === CARD_LIST) {
          // 普通卡片列表
          listDOM = getCardListDOM(dataList, row, config, base);
        } else if (type === CARD_IMG_LIST) {
          // 卡片图片列表
          listDOM = getCardImgListDOM(dataList, row, config, base);
        }

        return `<div class="${type}Container"><div class="card-list">${listDOM}</div>`;
      }
    }
  } else {
    // 渲染':::' 结尾
    return "</div>";
  }

  return "";
}

// 将数据解析成DOM结构 - 普通卡片列表
export function getCardListDOM(dataList, row, config, base) {
  const { target = "_blank" } = config;
  let listDOM = "";
  dataList.forEach((item) => {
    listDOM += `
        <${
          item.link
            ? 'a href="' +
              withBase(item.link, base) +
              '" target="' +
              target +
              '"'
            : "span"
        } class="card-item ${row ? "row-" + row : ""}"
           style="${
             item.bgColor
               ? "background-color:" +
                 item.bgColor +
                 ";--randomColor:" +
                 item.bgColor +
                 ";"
               : "--randomColor: var(--bodyBg);"
           }${item.textColor ? "color:" + item.textColor + ";" : ""}"
        >
          ${
            item.avatar
              ? '<img src="' +
                withBase(item.avatar, base) +
                '" class="no-zoom">'
              : ""
          }
          <div>
            <p class="name">${item.name}</p>
            <p class="desc">${item.desc}</p>
          </div>
        </${item.link ? "a" : "span"}>
      `;
  });
  return listDOM;
}

// 将数据解析成DOM结构 - 图文卡片列表
export function getCardImgListDOM(dataList, row, config, base) {
  const {
    imgHeight = "auto",
    objectFit = "cover",
    lineClamp = 1,
    target = "_blank",
  } = config;

  let listDOM = "";
  dataList.forEach((item) => {
    listDOM += `
        <div class="card-item ${row ? "row-" + row : ""}" >
          <a href="${withBase(item.link, base)}" target="${target}">
            <div class="box-img" style="height: ${imgHeight}">
                <img src="${withBase(
                  item.img,
                  base
                )}" class="no-zoom" style="object-fit: ${objectFit}">
            </div>
            <div class="box-info">
                <p class="name">${item.name}</p>
                ${
                  item.desc
                    ? `<p class="desc" style="-webkit-line-clamp: ${lineClamp}">${item.desc}</p>`
                    : ""
                }
            </div>
            ${
              item.avatar || item.author
                ? `<div class="box-footer">
                ${
                  item.avatar
                    ? `<img src="${withBase(
                        item.avatar,
                        base
                      )}" class="no-zoom">`
                    : ""
                }
                ${item.author ? `<span>${item.author}</span>` : ""}
            </div>`
                : ""
            }
          </a>
        </div>
      `;
  });
  return listDOM;
}

// 添加base路径
export function withBase(path, base) {
  if (!path) return "";
  if (base && path.charAt(0) === "/") {
    return base + path.slice(1);
  } else {
    return path;
  }
}
