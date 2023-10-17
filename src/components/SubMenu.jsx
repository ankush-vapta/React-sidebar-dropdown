import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const SubMenu = (props) => {

    const { item, ...rest } = props
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className='Link'
                to={item.path}
                onClick={() => item.subNav && showSubnav()}
            >
                <div className='nested-dropdown'>
                    <span>{item.icon}{item.title}</span>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </Link >
            {subnav && item?.subNav?.map((item, index) => {
                return (
                    <Link
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        className='Link'
                        key={index}
                        to={item.path}>
                        <span className='span'>
                            {item.icon}
                            {item.title}
                        </span>
                    </Link>
                )
            })}
        </>
    )
}

export default SubMenu;