"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CodeEditor } from "./CodeEditor";
import styled from "styled-components";
// import { Editor } from "./Editor";

const AppContainer = styled.div``;
const LiveblocksContainer = styled.div``;

export default function App() {
  const liveBlockKey = process.env.REACT_APP_LIVEBLOCKS_PROD_KEY || "";
  const roomId = "my-room";

  return (
    <AppContainer>
      <h1>Room ID: {roomId}</h1>
      <div>
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
      </div>
    </AppContainer>
  );
}
