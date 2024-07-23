import '@icon-park/react/styles/index.css';
import '@bydesign-ui/color-picker/dist/style/index.less';
import '@okee-uikit/react/themes/platform/index.css';
import './styles.css';
import React, { useMemo, useState } from 'react';
import {
  TableColumnPropsNew as TableColumnProps,
  TableNew as Table,
} from '@okee-uikit/react';

interface DemoData {
  id: number;
  code: string;
  name: string;
  age: number;
  gender: string;
  article: string;
  children?: DemoData[];
}

function Demo(): JSX.Element {
  const [data] = useState<DemoData[]>(createData);

  const columns = useMemo<TableColumnProps<DemoData>[]>(
    () => [
      {
        id: 'id',
        width: 100,
        title: 'ID',
        dataProp: 'id',
      },
      {
        id: 'name',
        width: 100,
        title: 'Name',
        dataProp: 'name',
      },
      {
        id: 'book',
        width: 400,
        title: 'Related book',
        dataProp: 'article',
      },
      {
        id: 'serial',
        width: 100,
        title: 'Crypto',
        dataProp: 'code',
      },
      {
        id: 'years',
        width: 100,
        title: 'Age',
        dataProp: 'age',
      },
      {
        id: 'gender',
        width: 100,
        title: 'Gender',
        dataProp: 'gender',
      },
    ],
    [],
  );

  return (
    <Table
      data={data}
      columns={columns}
      emptyType="empty"
      headerBottomBordered={false}
      bodyBottomBordered={true}
    />
  );
}

function createData(): DemoData[] {
  return [
    {
      id: 1,
      code: 'Alpha',
      name: 'Alice',
      age: 13,
      gender: 'girl',
      article: "Alice and Bob: A History Of The World's Most Famous Couple",
      children: [
        {
          id: 1,
          code: 'Athena',
          name: 'Pallas Athena',
          age: 13,
          gender: 'girl',
          article: "Alice and Bob: A History Of The World's Most Famous Couple",
        },
        {
          id: 2,
          code: 'Venus',
          name: 'Venus',
          age: 13,
          gender: 'girl',
          article: "Alice and Bob: A History Of The World's Most Famous Couple",
        },
      ],
    },
    {
      id: 2,
      code: 'Beta',
      name: 'Bob',
      age: 14,
      gender: 'boy',
      article: "Alice and Bob: A History Of The World's Most Famous Couple",
      children: [
        {
          id: 1,
          code: 'RSA',
          name: 'BoRivestb',
          age: 14,
          gender: 'boy',
          article:
            'A Method of Obtaining Digital Signatures and Public-Key Cryptosystems',
        },
        {
          id: 2,
          code: 'RSA',
          name: 'Shamir',
          age: 14,
          gender: 'boy',
          article:
            'A Method of Obtaining Digital Signatures and Public-Key Cryptosystems',
        },
        {
          id: 3,
          code: 'RSA',
          name: 'Adleman',
          age: 14,
          gender: 'boy',
          article:
            'A Method of Obtaining Digital Signatures and Public-Key Cryptosystems',
        },
      ],
    },
    {
      id: 3,
      code: 'Gamma',
      name: 'Carol',
      age: 15,
      gender: 'girl',
      article: "Alice and Bob: A History Of The World's Most Famous Couple",
      children: [
        {
          id: 3,
          code: 'Gamma',
          name: 'Carol',
          age: 15,
          gender: 'girl',
          article: "Alice and Bob: A History Of The World's Most Famous Couple",
          children: [
            {
              id: 3,
              code: 'Gamma',
              name: 'Carol',
              age: 15,
              gender: 'girl',
              article:
                "Alice and Bob: A History Of The World's Most Famous Couple",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      code: 'Delta',
      name: 'Dave',
      age: 16,
      gender: 'boy',
      article: "Alice and Bob: A History Of The World's Most Famous Couple",
    },
  ];
}

export default Demo;