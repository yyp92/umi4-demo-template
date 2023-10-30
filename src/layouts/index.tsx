import { Link, Outlet } from 'umi';

import React, {useEffect, useState} from 'react';
import styles from './index.less';

export default function Layout() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(100)
  }, [])

  return (
    <div className={styles.navs}>
      <div>{count}</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
