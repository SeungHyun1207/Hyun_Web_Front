/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Game Hook
 */

import {
  getGuildBaseInfoFetchResponse,
  getOGuildIdFetchResponse,
  IGuildBaseInfoFetchRequest,
} from '@/apis/client/game/maplestory/guild/guildApi';
import { useState } from 'react';
import {
  useMapleGuildBaseInfoStore,
  useMapleGuildOGuildIDStore,
} from './stores/useMapleGuildStore';

const worldList = [
  {
    label: '스카니아',
    value: '스카니아',
  },
  {
    label: '루나',
    value: '루나',
  },
  {
    label: '유니온',
    value: '유니온',
  },
  {
    label: '베라',
    value: '베라',
  },
  {
    label: '제니스',
    value: '제니스',
  },
  {
    label: '크로아',
    value: '크로아',
  },
  {
    label: '엘리시움',
    value: '엘리시움',
  },
  {
    label: '이노시스',
    value: '이노시스',
  },
  {
    label: '레드',
    value: '레드',
  },
  {
    label: '오로라',
    value: '오로라',
  },
  {
    label: '아케인',
    value: '아케인',
  },
  {
    label: '노바',
    value: '노바',
  },
  {
    label: '에오스',
    value: '에오스',
  },
  {
    label: '핼리오스',
    value: '핼리오스',
  },
  {
    label: '챌린저스',
    value: '챌린저스',
  },
  {
    label: '챌린저스2',
    value: '챌린저스2',
  },
  {
    label: '챌린저스3',
    value: '챌린저스3',
  },
  {
    label: '챌린저스4',
    value: '챌린저스4',
  },
];

const useMapleGuild = () => {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 길드명
  const [guildSearchName, setGuildSearchName] = useState<string>('');
  // 서버
  const [worldSearchName, setWorldSearchName] = useState<string>('');

  // 길드 검색 창 엔터 시
  const handlerGuildSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      getGuildOGuildID(guildSearchName, worldSearchName);
    }
  };

  const setGuildOGuildID = useMapleGuildOGuildIDStore(
    (oGuildId) => oGuildId.setGuildOGuildID
  );

  const setGuildBaseInfo = useMapleGuildBaseInfoStore(
    (baseInfo) => baseInfo.setGuildBaseInfo
  );

  /**
   * 길드 OGuildID 조회
   * @param guildSearchName
   * @param worldSearchName
   */
  const getGuildOGuildID = async (
    guildSearchName: string,
    worldSearchName: string
  ) => {
    try {
      const { oguild_id: oGuildId } = await getOGuildIdFetchResponse({
        guild_name: guildSearchName,
        world_name: worldSearchName,
      });
      if (oGuildId) {
        console.log(oGuildId);
        setGuildOGuildID(oGuildId);

        // 길드 기본 정보
        getGuildBaseInfo({
          oguild_id: oGuildId,
          date: yesterday.toISOString().split('T')[0],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * 길드 기본 정보 조회
   * @param guildSearchName
   * @param worldSearchName
   */
  const getGuildBaseInfo = async (params: IGuildBaseInfoFetchRequest) => {
    try {
      const guildBaseInfoData = await getGuildBaseInfoFetchResponse({
        oguild_id: params.oguild_id,
        date: params.date,
      });
      if (guildBaseInfoData) {
        setGuildBaseInfo(guildBaseInfoData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Array
    worldList,
    // State
    guildSearchName,
    setGuildSearchName,
    worldSearchName,
    setWorldSearchName,
    // Handler
    getGuildOGuildID,
    handlerGuildSearch,
  };
};

export default useMapleGuild;
