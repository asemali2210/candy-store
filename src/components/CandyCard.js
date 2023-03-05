"use client";
import Image from "next/image";

export default function CandyCard({img, body}) {
  return (
    <div className="cand-card d-flex flex-column align-items-center justify-content-center">
        <div className="cand__img">
            <Image
                src={img}
                width={44}
                height={60}
                alt="Candy"
            />
        </div>
        <p className="candy__body text-center">{body}</p>
    </div>
  )
};