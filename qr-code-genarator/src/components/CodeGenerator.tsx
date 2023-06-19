import classNames from "classnames";
import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

export default function CodeGenerator() {
  const [value, setValue] = useState();
  const [back, setBack] = useState("#FFFFFF");
  const [force, setForce] = useState("#000000");
  const [size, setSize] = useState<any>(256);
  const [qrUrl, setQRUrl] = useState("");

  const inputStyles = classNames(
    "p-2 rounded-xl shadow-2xl border-2 border-[#080202] outline-none text-base select-none cursor-pointer placeholder:text-[#080202] text-left"
  );

  const QRref = useRef<HTMLDivElement>(null);

  const downloadQRCode = (e: any) => {
    e.preventDefault();
    let canvas = QRref.current?.querySelector("canvas");
    let image = canvas?.toDataURL("image/png");
    let anchor: any = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setQRUrl("");
  };

  const qrCodeEncoder = (e: any) => {
    setQRUrl(e.target.value);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-green-800 justify-center items-center gap-8">
      <input
        className={inputStyles}
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="Value of QR code"
      />
      <input
        className={inputStyles}
        type="text"
        onChange={(e: any) => setBack(e.target.value)}
        placeholder="Background color"
      />
      <input
        className={inputStyles}
        type="text"
        onChange={(e: any) => setForce(e.target.value)}
        placeholder="Foreground color"
      />
      <input
        className={inputStyles}
        type="text"
        placeholder="Size of Qr-code"
        onChange={(e: any) =>
          setSize(parseInt(e.target.value === "" ? 0 : e.target.value, 10))
        }
      />
      {value && (
        <div ref={QRref} className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <form
              onSubmit={downloadQRCode}
              className="flex flex-col justify-center items-center gap-4"
            >
              <label className="text-lg font-medium">Enter URL</label>
              <input
                className={inputStyles}
                type="text"
                value={qrUrl}
                onChange={qrCodeEncoder}
                placeholder="https://www.whatsapp.com/download"
              />
              <button
                type="submit"
                disabled={!qrUrl}
                className="p-3 bg-blue-500 border border-slate-700 rounded-3xl w-full shadow-2xl"
              >
                Download QR code
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center py-4">
            <QRCode
              value={value}
              bgColor={back}
              fgColor={force}
              size={size === "" ? 0 : size}
            />
          </div>
        </div>
      )}
    </div>
  );
}
