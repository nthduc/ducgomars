import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";

const MarsInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const app = new PIXI.Application({
      width: container.clientWidth,
      height: container.clientHeight,
    });
    container.appendChild(app.view as HTMLCanvasElement);

    const text = new PIXI.Text("Mars Information", {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0xff1010,
      align: "center",
    });
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;
    text.anchor.set(0.5);
    app.stage.addChild(text);
  }, []);

  return <div ref={containerRef} />;
};

export default MarsInfo;
