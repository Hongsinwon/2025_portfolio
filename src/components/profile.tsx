"use client";

import Image from "next/image";
import style from "./profile.module.css";
import profile from "../../public/sinwon.jpeg";
import htmlIcon from "../../public/skill/html5.webp";
import cssIcon from "../../public/skill/css3.webp";
import jsIcon from "../../public/skill/JS.webp";
import reactIcon from "../../public/skill/react.webp";
import nextIcon from "../../public/skill/next.webp";
import typescriptIcon from "../../public/skill/typescript.webp";
import dartIcon from "../../public/skill/dart.webp";
import flutterIcon from "../../public/skill/flutter.webp";
import gitIcon from "../../public/skill/git.png";
import githubIcon from "../../public/skill/github.webp";
import { usePathname } from "next/navigation";

export default function Profile() {
  const pathname = usePathname();

  return (
    <div className={style.profileSection}>
      <div className={style.aboutMe}>
        <Image src={profile} alt="증명사진" width={140} />
        <div className={style.meInfo}>
          <b className={style.title}>홍신원</b>
          <p className={style.content}>Frontend Developer</p>
        </div>
      </div>
      <div className={style.skill}>
        <div className={style.title}>SKILL</div>
        <div className={style.skillIcon}>
          <Image src={htmlIcon} alt="html5" width={30} />
          <Image src={cssIcon} alt="css3" width={30} />
          <Image src={jsIcon} alt="javascript" width={30} />
          <Image src={reactIcon} alt="react" width={30} />
          <Image src={nextIcon} alt="next" width={30} />
          <Image src={typescriptIcon} alt="typescript" width={30} />
          <Image src={dartIcon} alt="dart" width={30} />
          <Image src={flutterIcon} alt="flutter" width={30} />
          <Image src={gitIcon} alt="git" width={30} />
          <Image src={githubIcon} alt="githubIcon" width={30} />
        </div>
      </div>

      <div className={style.introduction}>
        {pathname === "/" && (
          <div>
            <p className={style.infoTitle}>
              Q. 프론트엔드 개발자를 꿈꾸게 된 계기
            </p>
            <p className={style.content}>
              저는 예술 분야에 다양한 도전을 즐겨왔습니다.
              <br />
              하지만 좋아하는 것과 재능은 서로 다른 영역이라는 것을 깨달으며,
              <br />
              관심에 비해 실력이 따라주지 않는다는 점에서 고민이 많았습니다.
              <br />
              디자인 회사에서 일하던 중 스스로에 대한 자괴감이 깊어지던 시기에
              <br />
              지인을 통해 ‘퍼블리셔’라는 직무를 접하게 되었습니다.
              <br />
              <br />
              퍼블리셔로 근무하면서 기획과 UI/UX 발표, 디자인 작업을 병행했지만
              <br />
              여전히 디자인 중심의 업무 한계와 전문성의 벽에 부딪히는 일이
              많았습니다. <br />그 과정에서 ‘명확한 답이 있고, 내 아이디어를
              직접 구현할 수 있는 일’을
              <br /> 찾게 되었고, 그 결과 개발자의 길을 선택하게 되었습니다.
              <br />
              <br />
              프론트엔드 개발을 시작하면서 직접 무언가를 만들어낸다는 <br />
              성취감과 체계적인 프로세스 속에서 일한다는 즐거움을 느꼈습니다.
              <br /> 코드 작성, 디자인 가이드 준수, 웹 표준 이행 등 <br />
              규칙적인 절차를 밟는 과정이 저의 성향과 잘 맞았습니다.
              <br />
              <br />
              개발을 통해 변화와 성장을 추구하며, <br />
              사용자에게 편리하고 즐거운 경험을 제공하는 인터페이스를 기획하고
              <br />
              구현하는 일에서 큰 보람과 만족을 느낍니다. <br />
              앞으로도 끊임없이 발전하며 <br />
              창의적이고 체계적인 개발자로 성장하고자 합니다.
            </p>
          </div>
        )}
        <div>
          <p className={style.infoTitle}>
            Q. 일에 있어 가장 중요하게 생각하고 있는 것
          </p>
          <p className={style.content}>
            업무 중 발생하는 다양한 문제 상황에 대해 적극적으로 의견을 제시하고
            <br />
            협의를 통해 최선의 해결책을 도출하는 것을 중요하게 생각합니다.{" "}
            <br /> 또한, 논의된 내용을 문서화하여 문제 발생의 원인을 명확히
            이해하고, <br />
            이를 기반으로 더 나은 개선 방안을 제시할 수 있도록 <br /> 노력하는
            것이 중요하다 생각합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
