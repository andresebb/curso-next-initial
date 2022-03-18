import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#2bc48a",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, title }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{title}</a>
    </Link>
  );
};
