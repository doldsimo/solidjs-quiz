import styles from './TabNavigationContainer.module.css'
import NavigationButton from "./NavigationButton/NavigationButton";
import { Box } from "@hope-ui/solid"
import { createSignal, For, Show } from 'solid-js';
import { useQuizData } from '../../context/quizState';

const TabNavigationContainer = () => {
    const { currentPage } = useQuizData();
    const [pages, setPages] = createSignal([
        { text: "Home", path: "/home" },
        { text: "Quiz", path: "/quiz" },
        { text: "About", path: "/about" }
    ]);

    return (
        <Show
            when={currentPage() === 0}
        >
            <Box class={styles.container}>
                <For each={pages()}>
                    {page => <NavigationButton text={page.text} path={page.path} />}
                </For>
            </Box>
        </Show>

    )
}

export default TabNavigationContainer;