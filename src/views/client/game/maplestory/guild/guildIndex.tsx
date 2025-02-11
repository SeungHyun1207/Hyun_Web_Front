/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : Maple 길드 Index
 */

import useMapleGuild from '@/apis/hooks/client/game/useMapleGuild';
import BaseButton from '@/components/button/baseButton';
import BaseInput from '@/components/input/baseInput';
import BaseSelect from '@/components/select/baseSelect';
import { useMapleCharacterBaseInfoStore } from '@/stores/game/useMapleCharacterStore';
import { useMapleGuildBaseInfoStore } from '@/stores/game/useMapleGuildStore';

const GuildIndex = () => {
  const { guildBaseInfo } = useMapleGuildBaseInfoStore();

  const { characterBaseInfos } = useMapleCharacterBaseInfoStore();

  const {
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
  } = useMapleGuild();

  return (
    <div className="guildIndexWrap">
      <div className="guildTitle">
        <div className="title">
          <span>메이플스토리_길드_검색</span>
        </div>
      </div>
      <div className="guildSearch">
        <BaseSelect
          options={worldList}
          value={worldSearchName}
          onChange={(value) => {
            setWorldSearchName(value);
          }}
          variant={'default'}
          selectType={'basic'}
        />
        <BaseInput
          type="search"
          placeholder="길드 명을 입력해 주세요!"
          icon="🔍"
          onChange={(e) => {
            setGuildSearchName(e.target.value);
          }}
          onClick={() => {
            getGuildOGuildID(guildSearchName, worldSearchName);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getGuildOGuildID(guildSearchName, worldSearchName);
            }
          }}
          customSize={{
            width: '300px',
          }}
        />
        <BaseButton
          buttonName="검색"
          className="btn-primary"
          onClick={() => {
            getGuildOGuildID(guildSearchName, worldSearchName);
          }}
        />
      </div>

      {/* 길드 정보 */}
      <div className="guildInfoWrap">
        <div className="guildInfoCard">
          {guildBaseInfo && (
            <div className="guildInfo">
              <span> 월드 : {guildBaseInfo.world_name}</span>
              <img
                src={characterBaseInfos?.character_image}
                alt={characterBaseInfos?.character_name}
              />
              <span> 길드 이름 : {guildBaseInfo.guild_name}</span>
              <span> 길드 마스터 : {guildBaseInfo.guild_master_name}</span>
              <span> 길드 레벨 : {guildBaseInfo.guild_level}</span>
              <span> 길드 멤버 수 : {guildBaseInfo.guild_member_count}</span>
              <span> 길드 포인트 : {guildBaseInfo.guild_point}</span>
            </div>
          )}
        </div>

        <div className="guildMemberInfo">
          {guildBaseInfo?.guild_member &&
          guildBaseInfo?.guild_member.length > 0 ? (
            <div className="memberName">
              {guildBaseInfo.guild_member.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          ) : (
            <div className="emptyMember">
              <span>길드 멤버가 없습니다.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuildIndex;
