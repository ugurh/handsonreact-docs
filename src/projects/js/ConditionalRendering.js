import React from "react";

const isVisible = false;

const ConditionalRendering = () => {
    return isVisible ? <div>true</div> : <div>false</div>;
};

export default ConditionalRendering;
