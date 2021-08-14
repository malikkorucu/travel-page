import Head from "next/head";

const Layout = ({ children, ...props }) => {
  const { style } = props;

  return (
    <div style={style}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
