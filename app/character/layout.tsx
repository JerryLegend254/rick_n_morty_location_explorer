import { ApolloWrapper } from "../apolloclientwrapper";

export default function CharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
