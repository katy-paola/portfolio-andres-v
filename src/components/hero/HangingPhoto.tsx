import { forwardRef } from "react";
const HangingPhoto = forwardRef<HTMLDivElement>(function HangingPhoto(_, ref) {
  return (
    <div className="frame-wrapper w-32">
      <div ref={ref} className="swing-group">
        <div className="string"></div>
        <div className="photo">
          <img
            src="/photo-andres-vizcaino.webp"
            alt="Foto de Andrés Vizcaíno"
          />
        </div>
      </div>
    </div>
  );
});

export default HangingPhoto;
