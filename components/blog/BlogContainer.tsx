import React, { ReactNode } from 'react';
import { PostItems } from '../../utils/Content';
import { Footer } from '../navigation/Footer';
import MainHeader from '../navigation/Header';

type IMainProps = {
  meta: ReactNode;
  hero?: ReactNode;
  recentPosts?: PostItems[];
  categoryCollection?: [any, PostItems[]][];
  children?: ReactNode;
};

const BlogContainer = (props: IMainProps) => (
  <>
    {props.meta}

    <div>
      <MainHeader useWhite={true} />
    </div>

    <div>
      {props.hero}
      {props.children}
    </div> 

     <Footer />
  </>
);

export { BlogContainer };
