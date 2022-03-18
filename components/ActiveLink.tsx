import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#2bc48a",
  textDecoration: "underline",
};

interface Props {
  href: string;
  title: string;
}

export const ActiveLink: FC<Props> = ({ href, title }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{title}</a>
    </Link>
  );
};
