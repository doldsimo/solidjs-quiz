import styles from './NavigationButton.module.css';
import { A } from '@solidjs/router';
import { FaRegularLightbulb } from 'solid-icons/fa';
import { IoHome } from 'solid-icons/io'
import { BiRegularEdit } from 'solid-icons/bi'


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
                <Match when={props.path === "/editor"}>
                    <BiRegularEdit class={styles.navIcon} />
                </Match>
            </Switch>
            {props.text}
        </A>
    )
}

export default NavigationButton