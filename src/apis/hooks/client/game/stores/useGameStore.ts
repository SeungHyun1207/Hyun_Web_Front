/**
 *  작성일 : 2025-02-04
 *  작성자 : SH.K
 *  내용 : 사용자 Game Store 상태관리
 *
 *  persist를 사용하면 localStorage에 상태가 자동 저장된다.
 */

import {
  ICharacterAndroidFetchResponse,
  ICharacterCashItemEquipments,
  ICharacterDojangFetchResponse,
  ICharacterItemEquipments,
  ICharacterSetEffectInfo,
  ICharacterSymbolInfo,
  IMapleCharacterBaseInfoFetchResponse,
} from '@/apis/client/game/maplestory/character/characterApi';
import { IUnionInfoFetchResponse } from '@/apis/client/game/maplestory/union/unionApi';
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

// ============================================================
// 캐릭터 장착 캐시 장비 정보 Store
interface IMapleCharacterCashItemEquipmentsStore {
  characterCashItemEquipments: ICharacterCashItemEquipments[] | [];
  setCharacterCashItemEquipments: (
    itemEquipments: ICharacterCashItemEquipments[]
  ) => void;
}

export const useMapleCharacterCashItemEquipmentsStore =
  create<IMapleCharacterCashItemEquipmentsStore>((set) => ({
    characterCashItemEquipments: [],
    setCharacterCashItemEquipments: (cashItemEquipments) =>
      set({ characterCashItemEquipments: cashItemEquipments }),
  }));
// ============================================================

// ============================================================
// 캐릭터 장착 심볼 정보 Store
interface IMapleCharacterSymbolEquipmentsStore {
  characterSymbolEquipments: ICharacterSymbolInfo[] | [];
  setCharacterSymbolEquipments: (
    symbolEquipments: ICharacterSymbolInfo[]
  ) => void;
}

export const useMapleCharacterSymbolEquipmentsStore =
  create<IMapleCharacterSymbolEquipmentsStore>((set) => ({
    characterSymbolEquipments: [],
    setCharacterSymbolEquipments: (symbolEquipments) =>
      set({ characterSymbolEquipments: symbolEquipments }),
  }));
// ============================================================

// ============================================================
// 캐릭터 적용 세트효과 정보 Store
interface IMapleCharacterSetEffectStore {
  characterSetEffect: ICharacterSetEffectInfo[];
  setCharacterSetEffect: (setEffects: ICharacterSetEffectInfo[]) => void;
}

export const useMapleCharacterSetEffectStore =
  create<IMapleCharacterSetEffectStore>((set) => ({
    characterSetEffect: [],
    setCharacterSetEffect: (setEffects) =>
      set({ characterSetEffect: setEffects }),
  }));
// ============================================================

// ============================================================
// 캐릭터 장착 안드로이드 정보 Store
interface IMapleCharacterAndroidEquipmentsStore {
  characterAndroidEquipment: ICharacterAndroidFetchResponse | null;
  setCharacterAndroidEquipment: (
    androidEquipment: ICharacterAndroidFetchResponse
  ) => void;
}

export const useMapleCharacterAndroidStore =
  create<IMapleCharacterAndroidEquipmentsStore>((set) => ({
    characterAndroidEquipment: null,
    setCharacterAndroidEquipment: (androidEquipment) =>
      set({ characterAndroidEquipment: androidEquipment }),
  }));
// ============================================================

// ============================================================
// 캐릭터 무릉도장 최고기록 정보 Store
interface IMapleCharacterDojangStore {
  characterDojang: ICharacterDojangFetchResponse | null;
  setCharacterDojang: (dojang: ICharacterDojangFetchResponse) => void;
}

export const useMapleCharacterDojangStore = create<IMapleCharacterDojangStore>(
  (set) => ({
    characterDojang: null,
    setCharacterDojang: (dojang) => set({ characterDojang: dojang }),
  })
);
// ============================================================

// ************************************************************************************************************************
// ************************************************************************************************************************

// ============================================================
// 유니온 정보 Store
interface IMapleUnionInfoStore {
  unionInfo: IUnionInfoFetchResponse | null;
  setUnionInfo: (union: IUnionInfoFetchResponse) => void;
}

export const useMapleUnionInfoStore = create<IMapleUnionInfoStore>((set) => ({
  unionInfo: null,
  setUnionInfo: (union) => set({ unionInfo: union }),
}));
// ============================================================
