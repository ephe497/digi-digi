import React from "react"
import styles from "./title.module.scss"

const Title = ({children , className, label , type})=>{
return (
<div className={`${styles.title_container} ${className || ""} ${styles[type]}`}>
    {children || label}
</div>
)
}


export default Title



{/* <Title  type="title"/> */}