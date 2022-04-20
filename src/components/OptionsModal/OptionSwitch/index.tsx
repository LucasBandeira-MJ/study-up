import styles from './styles.module.sass'

interface OptionSwitchProps {
    onHandleChange: () => void
    isChecked?: boolean
    switchId: string
}

export const OptionSwitch = ({ onHandleChange, isChecked, switchId}: OptionSwitchProps) => {
    return (
        <>
            <input 
                type="checkbox" 
                id={switchId} 
                className={styles.switch}
                onChange={onHandleChange}
                checked={isChecked}
            />
            <label htmlFor={switchId} className={styles.toggleLabel} />
        </>
    )
}