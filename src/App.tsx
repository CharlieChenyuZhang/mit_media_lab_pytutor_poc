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
const MeetingButton = styled.button`
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #004085;
    transform: scale(0.95);
  }
`;
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
      <MeetingButton
        onClick={() =>
          window.open(
            "https://video-app-4917-2440-dev.twil.io?passcode=46594649172440",
            "_blank"
          )
        }
      >
        Join/Start Meeting
      </MeetingButton>
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
