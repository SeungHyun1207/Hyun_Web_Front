/**
 *  작성일 : 2025-02-06
 *  작성자 : SH.K
 *  내용 : 사용자 Maple Guild Store 상태관리
 *
 *  persist를 사용하면 localStorage에 상태가 자동 저장된다.
 */

import { IGuildBaseInfoFetchResponse } from '@/apis/client/game/maplestory/guild/guildApi';
import { create } from 'zustand';

// ============================================================
// 길드 OGuildID Store
interface IMapleGuildOGuildIDStore {
  guildOGuildID: string;
  setGuildOGuildID: (oGuildID: string) => void;
}

export const useMapleGuildOGuildIDStore = create<IMapleGuildOGuildIDStore>(
  (set) => ({
    guildOGuildID: '',
    setGuildOGuildID: (oGuildID) => set({ guildOGuildID: oGuildID }),
  })
);
// ============================================================

// ============================================================
// 길드 기본 정보 Store
interface IMapleGuildBaseInfoStore {
  guildBaseInfo: IGuildBaseInfoFetchResponse | null;
  setGuildBaseInfo: (baseInfo: IGuildBaseInfoFetchResponse) => void;
}

export const useMapleGuildBaseInfoStore = create<IMapleGuildBaseInfoStore>(
  (set) => ({
    guildBaseInfo: null,
    setGuildBaseInfo: (oGuildID) => set({ guildBaseInfo: oGuildID }),
  })
);
// ============================================================
