/**
 *  작성일 : 2025-02-04
 *  작성자 : SH.K
 *  내용 : 사용자 Game Store 상태관리
 *
 *  persist를 사용하면 localStorage에 상태가 자동 저장된다.
 */

import {
  ICharacterItemEquipments,
  IMapleCharacterBaseInfoFetchResponse,
} from '@/apis/client/gameApi';
import { create } from 'zustand';

// ============================================================
// 캐릭터 OCID Store
interface IMapleCharacterOCIDStore {
  characterOCID: string;
  setCharacterOCID: (ocid: string) => void;
}

export const useMapleCharacterOCIDStore = create<IMapleCharacterOCIDStore>(
  (set) => ({
    characterOCID: '',
    setCharacterOCID: (ocid) => set({ characterOCID: ocid }),
  })
);
// ============================================================

// ============================================================
// 캐릭터 기본 정보 Store
interface IMapleCharacterBaseInfoStore {
  characterBaseInfos: IMapleCharacterBaseInfoFetchResponse | null;
  setCharacterBaseInfos: (data: IMapleCharacterBaseInfoFetchResponse) => void;
}

// export const useMapleCharacterBaseInfoStore = create(
//   // Local Storage
//   persist<IMapleCharacterBaseInfoStore>(
//     (set) => ({
//       characterBaseInfos: null,
//       setCharacterBaseInfos: (data) => set({ characterBaseInfos: data }),
//     }),
//     {
//       name: 'characterBaseInfos',
//     }
//   )
// );
export const useMapleCharacterBaseInfoStore =
  create<IMapleCharacterBaseInfoStore>((set) => ({
    characterBaseInfos: null,
    setCharacterBaseInfos: (baseInfo) => set({ characterBaseInfos: baseInfo }),
  }));
// ============================================================

// ============================================================
// 캐릭터 장착 장비 정보 Store
interface IMapleCharacterItemEquipmentsStore {
  characterItemEquipments: ICharacterItemEquipments[] | [];
  setCharacterItemEquipments: (
    itemEquipments: ICharacterItemEquipments[]
  ) => void;
}

export const useMapleCharacterItemEquipmentsStore =
  create<IMapleCharacterItemEquipmentsStore>((set) => ({
    characterItemEquipments: [],
    setCharacterItemEquipments: (itemEquipments) =>
      set({ characterItemEquipments: itemEquipments }),
  }));
// ============================================================
