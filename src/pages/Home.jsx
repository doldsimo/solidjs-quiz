import { Container, Heading, Text, UnorderedList, ListItem } from "@hope-ui/solid";
import { Navigate } from "@solidjs/router";
import { AiFillGithub } from 'solid-icons/ai'
import { FaBrandsNpm } from 'solid-icons/fa'
import { useNavigate } from "@solidjs/router"

function Home() {

    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Heading level={1} size={"3xl"}>Solid-Quiz Sample Application</Heading>
                <br />
                <Text>
                    Example application in <b>solidjs</b> using the npm library <a style={{ color: "#5e82f7" }} target="_blank" href="https://www.npmjs.com/package/solid-quiz">solid-quiz</a>. <small>(Solid-start example <a style={{ color: "#5e82f7" }} target="_blank" href="https://github.com/doldsimo/solid-start-quiz-app">here</a>.)</small>
                    <br />
                    <br />
                    <br />
                    <UnorderedList>
                        <ListItem>A sample quiz can be carried out on the <strong onClick={() => navigate("/quiz")} style={{ color: "#5e82f7", cursor: "pointer" }}> quiz page</strong> of this application.</ListItem>
                        <ListItem> Under the <strong onClick={() => navigate("/editor")} style={{ color: "#5e82f7", cursor: "pointer" }}> editor page</strong>, a quiz editor can be used to easily create your own quiz data, which you can then use in your projects. Output is a JSON based Quiz which fits the correct quiz format for solid-quiz library.</ListItem>
                    </UnorderedList>
                    <br />
                    Try <a style={{ color: "#5e82f7" }} target="_blank" href="https://www.npmjs.com/package/solid-quiz">solid-quiz</a> out:
                </Text>
                <br />
                {/* <div style={{"max-width":"50%"}}> */}

                <div style={{ display: "flex", "flex-direction": "row", "justify-content": "space-around" }}>
                    <a target="_blank" href="https://github.com/doldsimo/solid-quiz"><AiFillGithub size={40} style={{ cursor: "pointer" }} /></a>
                    <a target="_blank" href="https://www.npmjs.com/package/solid-quiz"><FaBrandsNpm size={40} style={{ cursor: "pointer" }} /></a>
                </div>
                <br />
                <br />
                <br />



            </Container >
        </>
    );
}

export default Home;