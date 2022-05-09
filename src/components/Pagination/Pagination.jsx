import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Pagination.css";

function Pagination({ background, color }) {
    const defaultBackground = "#fff";
    const defaultColor = "#2c63ff";
    return (
        /* ====================Pagination======================================== */
        <>
            <div
                id="pagination"
                className="pagination"
                style={{
                    backgroundColor: background
                        ? background
                        : defaultBackground,
                    color: color ? color : defaultColor,
                }}
            >
                <div className="btn-group">
                    <div className="btn__item arrow">
                        <div id="l-arrow">
                            <ArrowBackIosNewIcon className="icon" />
                        </div>
                    </div>
                    <div className="btn__item page__list">
                        <div className="page__item">
                            <span>4</span>
                        </div>
                        <div className="page__item" id="m-pg-link">
                            <span>5</span>
                        </div>
                        <div className="page__item">
                            <span>6</span>
                        </div>
                    </div>
                    <div className="btn__item arrow">
                        <div id="r-arrow">
                            <ArrowForwardIosIcon className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pagination;
