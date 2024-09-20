import DefaultLayout from "../Layout";
import Header from "./components/Header";

/**
 * @this {import("../types").RouteContext}
 */
export default function Layout({ title = "", data = {}, children = [] }) {
  return (
    <DefaultLayout title={title} script="/wizard/index.js">
      <Header path={this.path} data={data} />
      {children}
    </DefaultLayout>
  );
}
