import styled from 'styled-components'
import styles from './Navbar.module.css'
export function Navbar() {
    return (
        <div className={styles.container}>
            <div>
                <img src="/images/impactguru-white.png" alt="dggdfg" />
                <input type="search" placeholder="Search"/>
            </div>
            <div>
                <ul>
                    <li>Start a free fundraiser</li>
                    <li>How it works</li>
                    <li>Browes fundraiser</li>
                    <li>Fight Covid</li>
                    <li>User</li>
                    <li>Price</li>
                </ul>
            </div>
        </div>
    )
}