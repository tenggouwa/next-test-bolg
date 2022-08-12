import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/Layout';

import logo from "https://cobex-images.oss-ap-southeast-1.aliyuncs.com/1952f07f524f4a5d8759fbc2e215676c.png"

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>卧槽 这个可以改头部</title>
      </Head>
      <h2>哈哈哈 卧槽</h2>
      <Link href="/">Home</Link>
      <br />
      <Image src="/images/1.png" alt="me" width="500" height="500" />
      <Image src={logo} placeholder="blur" />
    </Layout>
  )
}