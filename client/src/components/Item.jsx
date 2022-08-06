import React from "react";
import { useParams } from "react-router-dom";
import ImageContainer from "./ImageContainer";
import RightColumn from "./RightColumn";
import DescriptionContainer from "./DescriptionContainer";

function Item({ item, descripcion, infoItem }) {
    const { id } = useParams();
    const item2 = id;
    ((item === null) || (item.id !== item2)) && infoItem(item2);

    return (
        ((item !== null) && (item.id === item2)) ?
            (<main className="item-result">
                <section className="item-container">
                    <div className="first-section">
                        <ImageContainer item={item} />
                        <RightColumn item={item} />
                    </div>
                    <DescriptionContainer descripcion={descripcion} />
                </section>

            </main>)
            : (<div className="loader-container">
                <div className="spinner"></div>
            </div>)
    )
}

export default Item