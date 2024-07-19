import React from "react"
import classNames from "classnames"

export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classNames(sizeClass, variantClass, className)
console.log(allClasses)
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}