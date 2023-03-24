import styles from './NavigationButton.module.css';
import { A } from '@solidjs/router';
import { FaRegularLightbulb } from 'solid-icons/fa';
import { RiSystemInformationLine } from 'solid-icons/ri'
import { IoHome } from 'solid-icons/io'


const NavigationButton = (props) => {
    return (

        <A class={styles.navLink} href={props.path} activeClass={styles.activeLink}>
            <Switch fallback={<div>Not Found</div>}>
                <Match when={props.path === "/home"}>
                    <IoHome class={styles.navIcon} />
                </Match>
                <Match when={props.path === "/quiz"}>
                    <FaRegularLightbulb class={styles.navIcon} />
                </Match>
                <Match when={props.path === "/about"}>
                    <RiSystemInformationLine class={styles.navIcon} />
                </Match>
            </Switch>
            {props.text}
        </A>
    )
}

export default NavigationButton