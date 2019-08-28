interface mappedTypes {
    a: string;
    b: number;
    c: boolean;
}

//同态类型的三种形式
type ReadonlyObj = Readonly<mappedTypes>;

type PartialObj = Partial<mappedTypes>;

type PickObj = Pick<mappedTypes, 'a' | 'b'>;

//非同态类型
type RecordObj = Record<'a' | 'b', mappedTypes>;