import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import challengeLogoWhite from "images/inspection-challenge-logo.png";
import digispectLogoBlue from "images/digispect-logo-blue.png";
import bgHero from "images/bg-hero.svg";
import medal1st from "images/medal-1st.png";
import medal2nd from "images/medal-2nd.png";
import medal3rd from "images/medal-3rd.png";
import { css } from "styled-components/macro"; // eslint-disable-line

const POLL_MS = 3000;
const API_BASE =
  import.meta?.env?.VITE_API_BASE_URL || "https://api.assetfindr.com";
const API_URL = `${API_BASE}/v1/af-challenge-leader-board?page_no=1&page_size=5`;

const LeaderboardSection = styled.div`
  ${tw`bg-white py-8 md:py-16 px-4 relative flex justify-center`}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url(${bgHero});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    z-index: 1;
  }
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const LeaderboardContainer = tw.div`max-w-sm md:max-w-6xl mx-64 md:mx-8 lg:mx-40 bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-blue-100`;
const LeaderboardTitle = tw.h3`px-4 text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 flex flex-col sm:flex-row md:flex-row items-center justify-around gap-2 sm:gap-4 md:gap-6`;
const LeaderboardTableContainer = styled.div`
  ${tw`bg-[#1D62FF] rounded-2xl overflow-x-scroll overflow-y-hidden`}
  padding: 12px 16px;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const TableContent = styled.div`
  @media (max-width: 768px) {
    min-width: 480px;
  }
`;
const LeaderboardTableHeader = styled.div`
  ${tw`grid gap-2 md:gap-4 mb-4 text-[#B9FF01] text-xs md:text-base font-extrabold items-center justify-center`}
  grid-template-columns: 0.8fr 1.2fr 0.3fr 1fr 1fr 1fr 0.8fr 0.8fr;

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    font-size: 0.85rem;

    & > div:nth-child(1) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(2) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(3) {
      flex: 0.5;
      text-align: center;
      min-width: 40px;
    }
    & > div:nth-child(4) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(5) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(6) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(7) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
    & > div:nth-child(8) {
      flex: 1;
      text-align: center;
      min-width: 80px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    gap: 2px;
    font-size: 0.7rem;

    & > div:nth-child(1) {
      flex: 0 0 50px;
      text-align: center;
    }
    & > div:nth-child(2) {
      flex: 0 0 90px;
    }
    & > div:nth-child(3) {
      flex: 0 0 20px;
    }
    & > div:nth-child(4) {
      flex: 0 0 65px;
      text-align: center;
      margin-right: 4px;
    }
    & > div:nth-child(5) {
      flex: 0 0 65px;
      text-align: center;
      margin-right: 4px;
    }
    & > div:nth-child(6) {
      flex: 0 0 60px;
      text-align: center;
      margin-right: 4px;
    }
    & > div:nth-child(7) {
      flex: 0 0 60px;
      text-align: center;
      margin-right: 4px;
    }
    & > div:nth-child(8) {
      flex: 0 0 60px;
      text-align: center;
    }
  }
`;
const LeaderboardList = tw.div`space-y-4 md:space-y-3`;
const LeaderboardRow = styled.div`
  ${tw`grid gap-1 md:gap-2 items-center py-2 md:py-3`}
  grid-template-columns: 0.8fr 1.2fr 0.3fr 1fr 1fr 1fr 0.8fr 0.8fr;

  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    gap: 4px;

    & > div:nth-child(1) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 80px;
    }
    & > div:nth-child(2) {
      flex: 1;
      min-width: 80px;
    }
    & > div:nth-child(3) {
      flex: 0.5;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
    }
    & > div:nth-child(4) {
      flex: 1;
      min-width: 80px;
    }
    & > div:nth-child(5) {
      flex: 1;
      min-width: 80px;
    }
    & > div:nth-child(6) {
      flex: 1;
      min-width: 80px;
    }
    & > div:nth-child(7) {
      flex: 1;
      min-width: 80px;
    }
    & > div:nth-child(8) {
      flex: 1;
      min-width: 80px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    gap: 2px;

    & > div:nth-child(1) {
      flex: 0 0 50px;
    }
    & > div:nth-child(2) {
      flex: 0 0 90px;
    }
    & > div:nth-child(3) {
      flex: 0 0 20px;
    }
    & > div:nth-child(4) {
      flex: 0 0 65px;
      margin-right: 4px;
    }
    & > div:nth-child(5) {
      flex: 0 0 65px;
      margin-right: 4px;
    }
    & > div:nth-child(6) {
      flex: 0 0 60px;
      margin-right: 4px;
    }
    & > div:nth-child(7) {
      flex: 0 0 60px;
      margin-right: 4px;
    }
    & > div:nth-child(8) {
      flex: 0 0 60px;
    }
  }
`;
const RankColumn = tw.div`flex justify-center`;
const MedalIcon = tw.img`w-8 h-6 sm:w-12 sm:h-10 md:w-20 md:h-16`;
const RankNumber = tw.div`text-white text-lg sm:text-xl md:text-3xl font-bold text-center`;
const PlayButton = tw.div`text-[#B9FF01] text-sm sm:text-lg md:text-2xl flex items-center`;
const ParticipantColumn = tw.div`text-white min-w-0 overflow-hidden`;
const ParticipantName = tw.div`text-xs sm:text-sm md:text-xl font-extrabold text-white`;
const ParticipantCompany = tw.div`text-[#B9FF01] text-xs`;
const TimeColumn = tw.div`text-center`;
const TimeCard = tw.div`px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 border border-solid border-white rounded-lg`;
const TimeValue = tw.div`text-white text-xs sm:text-sm md:text-2xl font-extrabold`;
const AccuracyColumn = tw.div`text-center`;
const AccuracyCard = tw.div`px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 border border-solid border-white rounded-lg`;
const AccuracyValue = tw.div`text-white text-xs sm:text-sm md:text-2xl font-extrabold`;
const ScoreColumn = tw.div`text-center`;
const ScoreCard = tw.div`px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 border border-solid border-white rounded-lg`;
const ScoreValue = tw.div`text-white text-xs sm:text-sm md:text-2xl font-extrabold`;

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Single fetch pass (used by poll loop and Retry button)
  const fetchOnce = React.useCallback(async (signal) => {
    try {
      const res = await fetch(API_URL, {
        signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();

      const formatted = (result?.data ?? []).map((item) => {
        const acc = Number(item?.accuracy_percentage ?? 0);
        const totalScoreRaw = Number(item?.total_score ?? 0);
        const totalScore = Number.isFinite(totalScoreRaw)
          ? Number(totalScoreRaw.toFixed(1))
          : 0;

        const medalIcon =
          item?.rank === 1
            ? medal1st
            : item?.rank === 2
            ? medal2nd
            : item?.rank === 3
            ? medal3rd
            : null;

        return {
          userId: item?.user_id,
          rank: item?.rank || 0,
          name: item?.participant_name || "",
          company: item?.participant_company_name || "",
          manualTime: item?.manual_time_display || "00:00",
          digispectTime: item?.digispect_time_display || "00:00",
          totalTime: item?.total_time_display || "00:00",
          accuracy: `${Math.round(acc)}%`,
          totalScore,
          medalIcon,
        };
      });

      setLeaderboardData(formatted);
      setError(null);
    } catch (err) {
      if (err?.name === "AbortError") return; // ignore aborts on unmount/refresh
      console.error("Error fetching leaderboard:", err);
      setError(err?.message || "Failed to fetch leaderboard data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Poll every 3 seconds, no overlapping requests, clean up on unmount
  React.useEffect(() => {
    let mounted = true;

    const poll = async () => {
      while (mounted) {
        const controller = new AbortController();
        await fetchOnce(controller.signal);
        // wait POLL_MS before next request (prevents overlap)
        await new Promise((r) => setTimeout(r, POLL_MS));
        controller.abort(); // ensure we don't leak a controller
      }
    };

    // kick off immediately
    poll();

    return () => {
      mounted = false;
    };
  }, [fetchOnce]);

  const handleRetry = React.useCallback(() => {
    setIsLoading(true);
    const controller = new AbortController();
    fetchOnce(controller.signal).finally(() => controller.abort());
  }, [fetchOnce]);

  return (
    <LeaderboardSection>
      <LeaderboardContainer>
        <LeaderboardTitle>
          <img src={digispectLogoBlue} alt="Digispect" tw="h-10 md:h-12" />
          <img
            src={challengeLogoWhite}
            alt="Challenge"
            tw="h-10 md:h-12 mt-6 mb-2 md:mt-0 md:mb-0"
          />
          <span tw="mt-2 md:mt-0 text-black py-1 rounded text-lg md:text-3xl">
            LEADERBOARD
          </span>
        </LeaderboardTitle>

        <LeaderboardTableContainer>
          <TableContent>
            <LeaderboardTableHeader>
              <div tw="text-center">Rank</div>
              <div>Participant</div>
              <div></div>
              <div tw="text-center">Manual Time</div>
              <div tw="text-center">DigiSpect Time</div>
              <div tw="text-center">Total Time</div>
              <div tw="text-center">Accuracy (%)</div>
              <div tw="text-center">Total Score</div>
            </LeaderboardTableHeader>

            <LeaderboardList>
              {isLoading ? (
                <div tw="text-center py-8">
                  <div tw="text-white text-xl">Loading leaderboard...</div>
                </div>
              ) : error ? (
                <div tw="text-center py-8">
                  <div tw="text-red-300 text-xl mb-4">Error: {error}</div>
                  <button
                    tw="bg-[#B9FF01] text-[#1D62FF] px-4 py-2 rounded-lg font-bold hover:bg-yellow-400"
                    onClick={handleRetry}
                  >
                    Retry
                  </button>
                </div>
              ) : leaderboardData.length === 0 ? (
                <div tw="text-center py-8">
                  <div tw="text-white text-xl">No participants yet</div>
                </div>
              ) : (
                leaderboardData.map((p) => (
                  <LeaderboardRow key={p.userId || `${p.name}-${p.rank}`}>
                    <RankColumn>
                      {p.medalIcon ? (
                        <MedalIcon src={p.medalIcon} alt={`${p.rank} Place`} />
                      ) : (
                        <RankNumber>{p.rank}</RankNumber>
                      )}
                    </RankColumn>

                    <ParticipantColumn>
                      <ParticipantName>{p.name}</ParticipantName>
                      <ParticipantCompany>{p.company}</ParticipantCompany>
                    </ParticipantColumn>

                    <PlayButton>▶</PlayButton>

                    <TimeColumn>
                      <TimeCard>
                        <TimeValue>{p.manualTime}</TimeValue>
                      </TimeCard>
                    </TimeColumn>

                    <TimeColumn>
                      <TimeCard>
                        <TimeValue>{p.digispectTime}</TimeValue>
                      </TimeCard>
                    </TimeColumn>

                    <TimeColumn>
                      <TimeCard>
                        <TimeValue>{p.totalTime}</TimeValue>
                      </TimeCard>
                    </TimeColumn>

                    <AccuracyColumn>
                      <AccuracyCard>
                        <AccuracyValue>{p.accuracy}</AccuracyValue>
                      </AccuracyCard>
                    </AccuracyColumn>

                    <ScoreColumn>
                      <ScoreCard>
                        <ScoreValue>{p.totalScore}</ScoreValue>
                      </ScoreCard>
                    </ScoreColumn>
                  </LeaderboardRow>
                ))
              )}
            </LeaderboardList>
          </TableContent>
        </LeaderboardTableContainer>
      </LeaderboardContainer>
    </LeaderboardSection>
  );
}
