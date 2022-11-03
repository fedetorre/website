import React from "react";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
    return (
        <div
            className={`container p-8 mx-auto xl:px-0 ${
                props.className ? props.className : ""
            }`}>
            {props.children}
        </div>
    );
}
