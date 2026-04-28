import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - 页面未找到</h1>
      <p className="text-gray-600 mb-6">抱歉，您访问的页面不存在,请联系网站小管家修复吧～</p>
      <Link href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        返回首页
      </Link>
    </div>
  );
}