import * as jsxRuntime from "react/jsx-runtime";
import React, { createContext } from "react";
import ReactDOMServer from "react-dom/server";
import { Canvas, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const App$1 = "";
const radius = "_radius_1rxkr_1";
const pointer = "_pointer_1rxkr_43";
const first = "_first_1rxkr_43";
const second = "_second_1rxkr_61";
const third = "_third_1rxkr_79";
const rf = "_rf_1rxkr_1";
const rs = "_rs_1rxkr_1";
const rt = "_rt_1rxkr_1";
const cursor = "_cursor_1rxkr_139";
const cursor_module = {
  radius,
  pointer,
  first,
  second,
  third,
  rf,
  rs,
  rt,
  cursor
};
const cursorStyles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cursor,
  default: cursor_module,
  first,
  pointer,
  radius,
  rf,
  rs,
  rt,
  second,
  third
}, Symbol.toStringTag, { value: "Module" }));
createContext("light");
createContext(null);
const CursorContext = createContext("");
const { useEffect, useState: useState$1, useContext: useContext$3 } = React;
function Cursor() {
  const { cursor: cursor$1 } = useContext$3(CursorContext);
  const [mousePosition, setMousePosition] = useState$1({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState$1({ x: 0, y: 0 });
  const onMouseMove = (event) => {
    const { pageX: x2, pageY: y2 } = event;
    const factor = (distance) => {
      const scalingFactor = 0.07;
      const midPoint = 30;
      return 1 / (1 + Math.exp(-(scalingFactor * (distance - midPoint))));
    };
    const newX = prevMousePosition.x + (x2 - prevMousePosition.x) * factor(Math.abs(x2 - prevMousePosition.x));
    const newY = prevMousePosition.y + (y2 - prevMousePosition.y) * factor(Math.abs(y2 - prevMousePosition.y));
    requestAnimationFrame(() => {
      setMousePosition({ x: newX, y: newY });
    });
    setPrevMousePosition({ x: newX, y: newY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  const deviation = (xy) => {
    return cursor$1.type === "pointer" ? xy - 21 : xy - 15;
  };
  const { x, y } = mousePosition;
  return /* @__PURE__ */ jsxs("div", { className: void 0, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${cursor} ${cursorStyles[cursor$1.type]}`,
        style: {
          left: `${deviation(x) + 13}px`,
          top: `${deviation(y) + 13}px`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${radius} ${cursorStyles[cursor$1.type]} ${first} `,
        style: {
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${radius} ${cursorStyles[cursor$1.type]} ${second}`,
        style: {
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${radius} ${cursorStyles[cursor$1.type]} ${third}`,
        style: {
          left: `${deviation(x)}px`,
          top: `${deviation(y)}px`
        }
      }
    )
  ] });
}
const container$3 = "_container_p9ybv_1";
const background_module = {
  container: container$3
};
const { useRef } = React;
function MyRotatingGrid() {
  const myMesh = useRef();
  const linesColor = "#313131";
  const myDegToRad = (deg) => deg * (Math.PI / 180);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = myDegToRad(90) + myDegToRad(5) * Math.sin(a / 2);
    myMesh.current.position.z = myDegToRad(30) * myDegToRad(30) * Math.cos(a / 2);
  });
  return /* @__PURE__ */ jsx(
    "gridHelper",
    {
      ref: myMesh,
      args: [17, 13],
      color: linesColor,
      rotation: [Math.PI / 2, 0, 0]
    }
  );
}
function Background({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `container ${container$3}`, children: /* @__PURE__ */ jsxs(Canvas, { children: [
      /* @__PURE__ */ jsx("ambientLight", { intensity: 0.1 }),
      /* @__PURE__ */ jsx("directionalLight", { color: "red", position: [0, 0, 5] }),
      /* @__PURE__ */ jsx(MyRotatingGrid, {})
    ] }) }),
    children
  ] });
}
Background.propTypes = {
  children: PropTypes.node.isRequired
};
const container$2 = "_container_1skwo_1";
const logo = "_logo_1skwo_61";
const nav = "_nav_1skwo_83";
const detail_container = "_detail_container_1skwo_193";
const nav_li = "_nav_li_1skwo_227";
const button = "_button_1skwo_243";
const detail = "_detail_1skwo_193";
const header_module = {
  container: container$2,
  logo,
  nav,
  detail_container,
  nav_li,
  button,
  detail
};
const { useContext: useContext$2 } = React;
function Header() {
  const { setCursor } = useContext$2(CursorContext);
  return /* @__PURE__ */ jsxs("div", { className: container$2, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: logo,
        onMouseEnter: () => {
          setCursor({ type: "pointer" });
        },
        onMouseLeave: () => {
          setCursor({ type: null });
        },
        style: { cursor: "pointer" },
        children: "Semp.ai"
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: nav, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsxs("li", { className: nav_li, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `${logo} ${button}`,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            type: "button",
            children: "Projects"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: detail_container, children: /* @__PURE__ */ jsx("div", { className: detail, children: "Best experiments" }) })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: nav_li, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `${logo} ${button}`,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            type: "button",
            children: "About me"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: detail_container, children: /* @__PURE__ */ jsx("div", { className: detail, children: "Sempai you said?" }) })
      ] }),
      /* @__PURE__ */ jsxs("li", { className: nav_li, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `${logo} ${button}`,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            type: "button",
            children: "Contact"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: detail_container, children: /* @__PURE__ */ jsx("div", { className: detail, children: "Lets glitch together" }) })
      ] })
    ] }) })
  ] });
}
const container$1 = "_container_1ylxn_1";
const title = "_title_1ylxn_45";
const title_main = "_title_main_1ylxn_81";
const title_sup = "_title_sup_1ylxn_123";
const tittle_sup = "_tittle_sup_1ylxn_139";
const sphere = "_sphere_1ylxn_165";
const ring = "_ring_1ylxn_221";
const content = "_content_1ylxn_363";
const dwl = "_dwl_1ylxn_383";
const kanji$2 = "_kanji_1ylxn_397";
const phrase = "_phrase_1ylxn_415";
const phrase_sup = "_phrase_sup_1ylxn_431";
const reel = "_reel_1ylxn_445";
const social = "_social_1ylxn_487";
const social_item = "_social_item_1ylxn_513";
const social_link = "_social_link_1ylxn_523";
const hero_module = {
  container: container$1,
  title,
  title_main,
  title_sup,
  tittle_sup,
  sphere,
  ring,
  "ring-descend": "_ring-descend_1ylxn_1",
  content,
  dwl,
  kanji: kanji$2,
  phrase,
  phrase_sup,
  reel,
  social,
  social_item,
  social_link
};
const scene = "_scene_y7wb4_1";
const placeholder = "_placeholder_y7wb4_15";
const cube_container = "_cube_container_y7wb4_39";
const cube_face = "_cube_face_y7wb4_63";
const front = "_front_y7wb4_97";
const top = "_top_y7wb4_105";
const back = "_back_y7wb4_113";
const bottom = "_bottom_y7wb4_121";
const cube_module = {
  scene,
  placeholder,
  cube_container,
  cube_face,
  front,
  top,
  back,
  bottom
};
function Cube() {
  return /* @__PURE__ */ jsxs("div", { className: scene, children: [
    /* @__PURE__ */ jsxs("div", { className: cube_container, children: [
      /* @__PURE__ */ jsx("div", { className: `${cube_face} ${front}`, children: /* @__PURE__ */ jsx("p", { children: "play showreel" }) }),
      /* @__PURE__ */ jsx("div", { className: `${cube_face} ${top}`, children: /* @__PURE__ */ jsx("p", { children: "play showreel" }) }),
      /* @__PURE__ */ jsx("div", { className: `${cube_face} ${back}`, children: /* @__PURE__ */ jsx("p", { children: "play showreel" }) }),
      /* @__PURE__ */ jsx("div", { className: `${cube_face} ${bottom}`, children: /* @__PURE__ */ jsx("p", { children: "play showreel" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: placeholder, children: "play showreel" })
  ] });
}
const { useContext: useContext$1 } = React;
function Hero() {
  const { setCursor } = useContext$1(CursorContext);
  return /* @__PURE__ */ jsxs("div", { className: container$1, children: [
    /* @__PURE__ */ jsxs("h1", { className: title, children: [
      /* @__PURE__ */ jsx("span", { className: title_main, children: "D.W.L" }),
      /* @__PURE__ */ jsx("sup", { className: title_sup, children: "TM" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: sphere, children: [
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring }),
      /* @__PURE__ */ jsx("div", { className: ring })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: content, children: [
      /* @__PURE__ */ jsxs("div", { className: dwl, children: [
        /* @__PURE__ */ jsx("h4", { className: kanji$2, children: "愛" }),
        /* @__PURE__ */ jsxs("h4", { className: phrase, children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "DESIGN ",
            /* @__PURE__ */ jsx("br", {}),
            "WITH LOVE"
          ] }),
          /* @__PURE__ */ jsx("sup", { className: phrase_sup, children: "TM" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: reel,
          onMouseEnter: () => {
            setCursor({ type: "pointer" });
          },
          onMouseLeave: () => {
            setCursor({ type: null });
          },
          children: /* @__PURE__ */ jsx(Cube, {})
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: social, children: [
        /* @__PURE__ */ jsx(
          "li",
          {
            className: social_item,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.behance.net/dwl_media",
                target: "_blank",
                className: social_link,
                rel: "noreferrer",
                children: "Behance"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "li",
          {
            className: social_item,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://vimeo.com/dwlmedia",
                target: "_blank",
                className: social_link,
                rel: "noreferrer",
                children: "Vimeo"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "li",
          {
            className: social_item,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://dribbble.com/semp_ai",
                target: "_blank",
                className: social_link,
                rel: "noreferrer",
                children: "Dribbble"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "li",
          {
            className: social_item,
            onMouseEnter: () => {
              setCursor({ type: "pointer" });
            },
            onMouseLeave: () => {
              setCursor({ type: null });
            },
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/dwl.media/",
                target: "_blank",
                className: social_link,
                rel: "noreferrer",
                children: "Instagram"
              }
            )
          }
        )
      ] })
    ] })
  ] });
}
const stamp = "_stamp_rta1t_1";
const wrapper = "_wrapper_rta1t_31";
const kanji$1 = "_kanji_rta1t_41";
const path_inner$1 = "_path_inner_rta1t_57";
const stamp_module = {
  stamp,
  wrapper,
  kanji: kanji$1,
  path_inner: path_inner$1
};
const { useContext } = React;
function Stamp() {
  const { setCursor } = useContext(CursorContext);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: stamp,
      onMouseEnter: () => {
        setCursor({ type: "pointer" });
      },
      onMouseLeave: () => {
        setCursor({ type: null });
      },
      children: /* @__PURE__ */ jsxs("div", { className: wrapper, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://dwl.media/assets/icons/kanji.svg",
            alt: "kanji",
            className: kanji$1
          }
        ),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://dwl.media/assets/icons/path.svg",
            alt: "circular letters",
            className: path_inner$1
          }
        ) })
      ] })
    }
  );
}
const container = "_container_1gmkk_1";
const icon_wrapper = "_icon_wrapper_1gmkk_25";
const kanji = "_kanji_1gmkk_37";
const path_inner = "_path_inner_1gmkk_53";
const rotation = "_rotation_1gmkk_1";
const curtain_wrapper = "_curtain_wrapper_1gmkk_81";
const curtain_left = "_curtain_left_1gmkk_105";
const curtain_right = "_curtain_right_1gmkk_135";
const vertical_white_line = "_vertical_white_line_1gmkk_201";
const loader_module = {
  container,
  icon_wrapper,
  kanji,
  path_inner,
  rotation,
  curtain_wrapper,
  curtain_left,
  curtain_right,
  vertical_white_line
};
function Loader() {
  return /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsxs("div", { className: curtain_wrapper, children: [
      /* @__PURE__ */ jsx("div", { className: curtain_left }),
      /* @__PURE__ */ jsx("div", { className: curtain_right })
    ] }),
    /* @__PURE__ */ jsx("div", { className: vertical_white_line }),
    /* @__PURE__ */ jsxs("div", { className: icon_wrapper, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://dwl.media/assets/icons/kanji.svg",
          alt: "kanji",
          className: kanji
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://dwl.media/assets/icons/path.svg",
          alt: "circular letters",
          className: path_inner
        }
      ) })
    ] })
  ] });
}
const { useState } = React;
function App() {
  const [cursor2, setCursor] = useState("");
  return /* @__PURE__ */ jsx(CursorContext.Provider, { value: { cursor: cursor2, setCursor }, children: /* @__PURE__ */ jsxs(Background, { children: [
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Cursor, {}),
    /* @__PURE__ */ jsx(Stamp, {})
  ] }) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render as default,
  render
};
