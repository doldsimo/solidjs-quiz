import styles from './TabNavigationContainer.module.css'
import NavigationButton from "./NavigationButton/NavigationButton";
import { Box } from "@hope-ui/solid"
import { createSignal, For } from 'solid-js';

const TabNavigationContainer = () => {
    const [pages, setPages] = createSignal([
        { text: "Home", path: "/home" },
        { text: "Quiz", path: "/quiz" },
        { text: "About", path: "/about" }
    ]);

    return (
        <Box class={styles.container}>
            <For each={pages()}>
                {page => <NavigationButton text={page.text} path={page.path} />}
            </For>
        </Box>
    )
}

export default TabNavigationContainer;