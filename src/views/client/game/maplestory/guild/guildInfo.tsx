/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : Maple 길드 Info
 */

import { useMapleGuildBaseInfoStore } from '@/apis/hooks/client/game/stores/useMapleGuildStore';

const GuildInfo = () => {
  const { guildBaseInfo } = useMapleGuildBaseInfoStore();

  return (
    <div className="guildWrap">
      {guildBaseInfo && (
        <div className="guild">
          {guildBaseInfo.guild_member.map((member) => (
            <span>{member}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuildInfo;
