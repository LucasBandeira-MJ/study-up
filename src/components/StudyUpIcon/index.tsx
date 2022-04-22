import styles from './styles.module.sass'

import { BsBook, BsBookFill, BsFileArrowUpFill } from 'react-icons/bs'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { GiPlainArrow } from 'react-icons/gi'
import { GoArrowUp } from 'react-icons/go'
import { ImArrowUp } from 'react-icons/im'


export const StudyUpIcon = () => {
    return (
        <span className={styles.iconContainer}>
            <BsBook />
            <ImArrowUp />
        </span>
    )
}