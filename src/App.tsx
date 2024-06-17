"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CodeEditor } from "./CodeEditor";
import styled from "styled-components";
import mitMediaLabLogo from "./assets/images/mit-media-lab-logo.png";
// import { Editor } from "./Editor";

const Title = styled.h1``;
const SubTitle = styled.p`
  margin: 20px 60px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-top: 100px;
`;

const LiveBlockContainer = styled.div`
  width: 100%;
`;

export default function App() {
  const liveBlockKey = process.env.REACT_APP_LIVEBLOCKS_PROD_KEY || "";
  const roomId = "my-room";

  return (
    <Container>
      <Logo src={mitMediaLabLogo} alt="MIT Media Lab Logo" />
      <Title>Personal Robots: PyTutor PoC</Title>
      <SubTitle>
        <i>PoC with collab code editor and video call.</i>
      </SubTitle>

      <p>Room ID: {roomId}</p>
      <LiveBlockContainer>
        <LiveblocksProvider publicApiKey={liveBlockKey}>
          <RoomProvider id={roomId} initialPresence={{}}>
            {/* code editor */}
            <ClientSideSuspense fallback={<div>Loading…</div>}>
              {() => <CodeEditor />}
            </ClientSideSuspense>

            {/* text editor */}
            {/* <ClientSideSuspense fallback={<div>Loading…</div>}>
                {() => <Editor />}
              </ClientSideSuspense> */}
          </RoomProvider>
        </LiveblocksProvider>
      </LiveBlockContainer>
    </Container>
  );
}
