export type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   **/
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { '[object Object]': 'any' };
  DateTime: Date;
};

export type IBooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type IDateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type IDirectory = INode & {
  __typename?: 'Directory';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
  readonly sourceInstanceName?: Maybe<Scalars['String']>;
  readonly absolutePath?: Maybe<Scalars['String']>;
  readonly relativePath?: Maybe<Scalars['String']>;
  readonly extension?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly prettySize?: Maybe<Scalars['String']>;
  readonly modifiedTime?: Maybe<Scalars['Date']>;
  readonly accessTime?: Maybe<Scalars['Date']>;
  readonly changeTime?: Maybe<Scalars['Date']>;
  readonly birthTime?: Maybe<Scalars['Date']>;
  readonly root?: Maybe<Scalars['String']>;
  readonly dir?: Maybe<Scalars['String']>;
  readonly base?: Maybe<Scalars['String']>;
  readonly ext?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly relativeDirectory?: Maybe<Scalars['String']>;
  readonly dev?: Maybe<Scalars['Int']>;
  readonly mode?: Maybe<Scalars['Int']>;
  readonly nlink?: Maybe<Scalars['Int']>;
  readonly uid?: Maybe<Scalars['Int']>;
  readonly gid?: Maybe<Scalars['Int']>;
  readonly rdev?: Maybe<Scalars['Int']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly ino?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly atimeMs?: Maybe<Scalars['Float']>;
  readonly mtimeMs?: Maybe<Scalars['Float']>;
  readonly ctimeMs?: Maybe<Scalars['Float']>;
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly atime?: Maybe<Scalars['Date']>;
  readonly mtime?: Maybe<Scalars['Date']>;
  readonly ctime?: Maybe<Scalars['Date']>;
  readonly birthtime?: Maybe<Scalars['Date']>;
};

export type IDirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IDirectoryConnection = {
  __typename?: 'DirectoryConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IDirectoryEdge>;
  readonly nodes: ReadonlyArray<IDirectory>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<IDirectoryGroupConnection>;
};

export type IDirectoryConnectionDistinctArgs = {
  field: IDirectoryFieldsEnum;
};

export type IDirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IDirectoryFieldsEnum;
};

export type IDirectoryEdge = {
  __typename?: 'DirectoryEdge';
  readonly next?: Maybe<IDirectory>;
  readonly node: IDirectory;
  readonly previous?: Maybe<IDirectory>;
};

export const enum IDirectoryFieldsEnum {
  ID = 'id',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
  SOURCEINSTANCENAME = 'sourceInstanceName',
  ABSOLUTEPATH = 'absolutePath',
  RELATIVEPATH = 'relativePath',
  EXTENSION = 'extension',
  SIZE = 'size',
  PRETTYSIZE = 'prettySize',
  MODIFIEDTIME = 'modifiedTime',
  ACCESSTIME = 'accessTime',
  CHANGETIME = 'changeTime',
  BIRTHTIME = 'birthTime',
  ROOT = 'root',
  DIR = 'dir',
  BASE = 'base',
  EXT = 'ext',
  NAME = 'name',
  RELATIVEDIRECTORY = 'relativeDirectory',
  DEV = 'dev',
  MODE = 'mode',
  NLINK = 'nlink',
  UID = 'uid',
  GID = 'gid',
  RDEV = 'rdev',
  BLKSIZE = 'blksize',
  INO = 'ino',
  BLOCKS = 'blocks',
  ATIMEMS = 'atimeMs',
  MTIMEMS = 'mtimeMs',
  CTIMEMS = 'ctimeMs',
  BIRTHTIMEMS = 'birthtimeMs',
  ATIME = 'atime',
  MTIME = 'mtime',
  CTIME = 'ctime',
  BIRTHTIME = 'birthtime',
}

export type IDirectoryFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
  readonly sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  readonly absolutePath?: Maybe<IStringQueryOperatorInput>;
  readonly relativePath?: Maybe<IStringQueryOperatorInput>;
  readonly extension?: Maybe<IStringQueryOperatorInput>;
  readonly size?: Maybe<IIntQueryOperatorInput>;
  readonly prettySize?: Maybe<IStringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<IDateQueryOperatorInput>;
  readonly accessTime?: Maybe<IDateQueryOperatorInput>;
  readonly changeTime?: Maybe<IDateQueryOperatorInput>;
  readonly birthTime?: Maybe<IDateQueryOperatorInput>;
  readonly root?: Maybe<IStringQueryOperatorInput>;
  readonly dir?: Maybe<IStringQueryOperatorInput>;
  readonly base?: Maybe<IStringQueryOperatorInput>;
  readonly ext?: Maybe<IStringQueryOperatorInput>;
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  readonly dev?: Maybe<IIntQueryOperatorInput>;
  readonly mode?: Maybe<IIntQueryOperatorInput>;
  readonly nlink?: Maybe<IIntQueryOperatorInput>;
  readonly uid?: Maybe<IIntQueryOperatorInput>;
  readonly gid?: Maybe<IIntQueryOperatorInput>;
  readonly rdev?: Maybe<IIntQueryOperatorInput>;
  readonly blksize?: Maybe<IIntQueryOperatorInput>;
  readonly ino?: Maybe<IIntQueryOperatorInput>;
  readonly blocks?: Maybe<IIntQueryOperatorInput>;
  readonly atimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly atime?: Maybe<IDateQueryOperatorInput>;
  readonly mtime?: Maybe<IDateQueryOperatorInput>;
  readonly ctime?: Maybe<IDateQueryOperatorInput>;
  readonly birthtime?: Maybe<IDateQueryOperatorInput>;
};

export type IDirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IDirectoryEdge>;
  readonly nodes: ReadonlyArray<IDirectory>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type IDirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<IDirectoryFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type IDuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type IFile = INode & {
  __typename?: 'File';
  readonly birthtime?: Maybe<Scalars['Date']>;
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly sourceInstanceName?: Maybe<Scalars['String']>;
  readonly absolutePath?: Maybe<Scalars['String']>;
  readonly relativePath?: Maybe<Scalars['String']>;
  readonly extension?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Int']>;
  readonly prettySize?: Maybe<Scalars['String']>;
  readonly modifiedTime?: Maybe<Scalars['Date']>;
  readonly accessTime?: Maybe<Scalars['Date']>;
  readonly changeTime?: Maybe<Scalars['Date']>;
  readonly birthTime?: Maybe<Scalars['Date']>;
  readonly root?: Maybe<Scalars['String']>;
  readonly dir?: Maybe<Scalars['String']>;
  readonly base?: Maybe<Scalars['String']>;
  readonly ext?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly relativeDirectory?: Maybe<Scalars['String']>;
  readonly dev?: Maybe<Scalars['Int']>;
  readonly mode?: Maybe<Scalars['Int']>;
  readonly nlink?: Maybe<Scalars['Int']>;
  readonly uid?: Maybe<Scalars['Int']>;
  readonly gid?: Maybe<Scalars['Int']>;
  readonly rdev?: Maybe<Scalars['Int']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly ino?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly atimeMs?: Maybe<Scalars['Float']>;
  readonly mtimeMs?: Maybe<Scalars['Float']>;
  readonly ctimeMs?: Maybe<Scalars['Float']>;
  readonly atime?: Maybe<Scalars['Date']>;
  readonly mtime?: Maybe<Scalars['Date']>;
  readonly ctime?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
  readonly childMarkdownRemark?: Maybe<IMarkdownRemark>;
  readonly childImageSharp?: Maybe<IImageSharp>;
};

export type IFileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IFileConnection = {
  __typename?: 'FileConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IFileEdge>;
  readonly nodes: ReadonlyArray<IFile>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<IFileGroupConnection>;
};

export type IFileConnectionDistinctArgs = {
  field: IFileFieldsEnum;
};

export type IFileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IFileFieldsEnum;
};

export type IFileEdge = {
  __typename?: 'FileEdge';
  readonly next?: Maybe<IFile>;
  readonly node: IFile;
  readonly previous?: Maybe<IFile>;
};

export const enum IFileFieldsEnum {
  BIRTHTIME = 'birthtime',
  BIRTHTIMEMS = 'birthtimeMs',
  SOURCEINSTANCENAME = 'sourceInstanceName',
  ABSOLUTEPATH = 'absolutePath',
  RELATIVEPATH = 'relativePath',
  EXTENSION = 'extension',
  SIZE = 'size',
  PRETTYSIZE = 'prettySize',
  MODIFIEDTIME = 'modifiedTime',
  ACCESSTIME = 'accessTime',
  CHANGETIME = 'changeTime',
  BIRTHTIME = 'birthTime',
  ROOT = 'root',
  DIR = 'dir',
  BASE = 'base',
  EXT = 'ext',
  NAME = 'name',
  RELATIVEDIRECTORY = 'relativeDirectory',
  DEV = 'dev',
  MODE = 'mode',
  NLINK = 'nlink',
  UID = 'uid',
  GID = 'gid',
  RDEV = 'rdev',
  BLKSIZE = 'blksize',
  INO = 'ino',
  BLOCKS = 'blocks',
  ATIMEMS = 'atimeMs',
  MTIMEMS = 'mtimeMs',
  CTIMEMS = 'ctimeMs',
  ATIME = 'atime',
  MTIME = 'mtime',
  CTIME = 'ctime',
  PUBLICURL = 'publicURL',
  ID = 'id',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
  CHILDMARKDOWNREMARK___ID = 'childMarkdownRemark___id',
  CHILDMARKDOWNREMARK___FRONTMATTER___TITLE = 'childMarkdownRemark___frontmatter___title',
  CHILDMARKDOWNREMARK___FRONTMATTER___TEMPLATEKEY = 'childMarkdownRemark___frontmatter___templateKey',
  CHILDMARKDOWNREMARK___FRONTMATTER___META_TITLE = 'childMarkdownRemark___frontmatter___meta_title',
  CHILDMARKDOWNREMARK___FRONTMATTER___META_DESCRIPTION = 'childMarkdownRemark___frontmatter___meta_description',
  CHILDMARKDOWNREMARK___FRONTMATTER___HEADING = 'childMarkdownRemark___frontmatter___heading',
  CHILDMARKDOWNREMARK___FRONTMATTER___DESCRIPTION = 'childMarkdownRemark___frontmatter___description',
  CHILDMARKDOWNREMARK___FRONTMATTER___OFFERINGS___BLURBS = 'childMarkdownRemark___frontmatter___offerings___blurbs',
  CHILDMARKDOWNREMARK___FRONTMATTER___TESTIMONIALS = 'childMarkdownRemark___frontmatter___testimonials',
  CHILDMARKDOWNREMARK___FRONTMATTER___TESTIMONIALS___AUTHOR = 'childMarkdownRemark___frontmatter___testimonials___author',
  CHILDMARKDOWNREMARK___FRONTMATTER___TESTIMONIALS___QUOTE = 'childMarkdownRemark___frontmatter___testimonials___quote',
  CHILDMARKDOWNREMARK___FRONTMATTER___SUBTITLE = 'childMarkdownRemark___frontmatter___subtitle',
  CHILDMARKDOWNREMARK___FRONTMATTER___PRICING___DESCRIPTION = 'childMarkdownRemark___frontmatter___pricing___description',
  CHILDMARKDOWNREMARK___FRONTMATTER___PRICING___HEADING = 'childMarkdownRemark___frontmatter___pricing___heading',
  CHILDMARKDOWNREMARK___FRONTMATTER___PRICING___PLANS = 'childMarkdownRemark___frontmatter___pricing___plans',
  CHILDMARKDOWNREMARK___FRONTMATTER___SLUG = 'childMarkdownRemark___frontmatter___slug',
  CHILDMARKDOWNREMARK___FRONTMATTER___DATE = 'childMarkdownRemark___frontmatter___date',
  CHILDMARKDOWNREMARK___FRONTMATTER___COVER = 'childMarkdownRemark___frontmatter___cover',
  CHILDMARKDOWNREMARK___FRONTMATTER___TAGS = 'childMarkdownRemark___frontmatter___tags',
  CHILDMARKDOWNREMARK___EXCERPT = 'childMarkdownRemark___excerpt',
  CHILDMARKDOWNREMARK___RAWMARKDOWNBODY = 'childMarkdownRemark___rawMarkdownBody',
  CHILDMARKDOWNREMARK___FILEABSOLUTEPATH = 'childMarkdownRemark___fileAbsolutePath',
  CHILDMARKDOWNREMARK___FIELDS___SLUG = 'childMarkdownRemark___fields___slug',
  CHILDMARKDOWNREMARK___HTML = 'childMarkdownRemark___html',
  CHILDMARKDOWNREMARK___HTMLAST = 'childMarkdownRemark___htmlAst',
  CHILDMARKDOWNREMARK___EXCERPTAST = 'childMarkdownRemark___excerptAst',
  CHILDMARKDOWNREMARK___HEADINGS = 'childMarkdownRemark___headings',
  CHILDMARKDOWNREMARK___HEADINGS___VALUE = 'childMarkdownRemark___headings___value',
  CHILDMARKDOWNREMARK___HEADINGS___DEPTH = 'childMarkdownRemark___headings___depth',
  CHILDMARKDOWNREMARK___TIMETOREAD = 'childMarkdownRemark___timeToRead',
  CHILDMARKDOWNREMARK___TABLEOFCONTENTS = 'childMarkdownRemark___tableOfContents',
  CHILDMARKDOWNREMARK___WORDCOUNT___PARAGRAPHS = 'childMarkdownRemark___wordCount___paragraphs',
  CHILDMARKDOWNREMARK___WORDCOUNT___SENTENCES = 'childMarkdownRemark___wordCount___sentences',
  CHILDMARKDOWNREMARK___WORDCOUNT___WORDS = 'childMarkdownRemark___wordCount___words',
  CHILDMARKDOWNREMARK___PARENT___ID = 'childMarkdownRemark___parent___id',
  CHILDMARKDOWNREMARK___PARENT___PARENT___ID = 'childMarkdownRemark___parent___parent___id',
  CHILDMARKDOWNREMARK___PARENT___PARENT___CHILDREN = 'childMarkdownRemark___parent___parent___children',
  CHILDMARKDOWNREMARK___PARENT___CHILDREN = 'childMarkdownRemark___parent___children',
  CHILDMARKDOWNREMARK___PARENT___CHILDREN___ID = 'childMarkdownRemark___parent___children___id',
  CHILDMARKDOWNREMARK___PARENT___CHILDREN___CHILDREN = 'childMarkdownRemark___parent___children___children',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___CONTENT = 'childMarkdownRemark___parent___internal___content',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___CONTENTDIGEST = 'childMarkdownRemark___parent___internal___contentDigest',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___DESCRIPTION = 'childMarkdownRemark___parent___internal___description',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___FIELDOWNERS = 'childMarkdownRemark___parent___internal___fieldOwners',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___IGNORETYPE = 'childMarkdownRemark___parent___internal___ignoreType',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___MEDIATYPE = 'childMarkdownRemark___parent___internal___mediaType',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___OWNER = 'childMarkdownRemark___parent___internal___owner',
  CHILDMARKDOWNREMARK___PARENT___INTERNAL___TYPE = 'childMarkdownRemark___parent___internal___type',
  CHILDMARKDOWNREMARK___CHILDREN = 'childMarkdownRemark___children',
  CHILDMARKDOWNREMARK___CHILDREN___ID = 'childMarkdownRemark___children___id',
  CHILDMARKDOWNREMARK___CHILDREN___PARENT___ID = 'childMarkdownRemark___children___parent___id',
  CHILDMARKDOWNREMARK___CHILDREN___PARENT___CHILDREN = 'childMarkdownRemark___children___parent___children',
  CHILDMARKDOWNREMARK___CHILDREN___CHILDREN = 'childMarkdownRemark___children___children',
  CHILDMARKDOWNREMARK___CHILDREN___CHILDREN___ID = 'childMarkdownRemark___children___children___id',
  CHILDMARKDOWNREMARK___CHILDREN___CHILDREN___CHILDREN = 'childMarkdownRemark___children___children___children',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___CONTENT = 'childMarkdownRemark___children___internal___content',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___CONTENTDIGEST = 'childMarkdownRemark___children___internal___contentDigest',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___DESCRIPTION = 'childMarkdownRemark___children___internal___description',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___FIELDOWNERS = 'childMarkdownRemark___children___internal___fieldOwners',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___IGNORETYPE = 'childMarkdownRemark___children___internal___ignoreType',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___MEDIATYPE = 'childMarkdownRemark___children___internal___mediaType',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___OWNER = 'childMarkdownRemark___children___internal___owner',
  CHILDMARKDOWNREMARK___CHILDREN___INTERNAL___TYPE = 'childMarkdownRemark___children___internal___type',
  CHILDMARKDOWNREMARK___INTERNAL___CONTENT = 'childMarkdownRemark___internal___content',
  CHILDMARKDOWNREMARK___INTERNAL___CONTENTDIGEST = 'childMarkdownRemark___internal___contentDigest',
  CHILDMARKDOWNREMARK___INTERNAL___DESCRIPTION = 'childMarkdownRemark___internal___description',
  CHILDMARKDOWNREMARK___INTERNAL___FIELDOWNERS = 'childMarkdownRemark___internal___fieldOwners',
  CHILDMARKDOWNREMARK___INTERNAL___IGNORETYPE = 'childMarkdownRemark___internal___ignoreType',
  CHILDMARKDOWNREMARK___INTERNAL___MEDIATYPE = 'childMarkdownRemark___internal___mediaType',
  CHILDMARKDOWNREMARK___INTERNAL___OWNER = 'childMarkdownRemark___internal___owner',
  CHILDMARKDOWNREMARK___INTERNAL___TYPE = 'childMarkdownRemark___internal___type',
}

export type IFileFilterInput = {
  readonly birthtime?: Maybe<IDateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  readonly absolutePath?: Maybe<IStringQueryOperatorInput>;
  readonly relativePath?: Maybe<IStringQueryOperatorInput>;
  readonly extension?: Maybe<IStringQueryOperatorInput>;
  readonly size?: Maybe<IIntQueryOperatorInput>;
  readonly prettySize?: Maybe<IStringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<IDateQueryOperatorInput>;
  readonly accessTime?: Maybe<IDateQueryOperatorInput>;
  readonly changeTime?: Maybe<IDateQueryOperatorInput>;
  readonly birthTime?: Maybe<IDateQueryOperatorInput>;
  readonly root?: Maybe<IStringQueryOperatorInput>;
  readonly dir?: Maybe<IStringQueryOperatorInput>;
  readonly base?: Maybe<IStringQueryOperatorInput>;
  readonly ext?: Maybe<IStringQueryOperatorInput>;
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  readonly dev?: Maybe<IIntQueryOperatorInput>;
  readonly mode?: Maybe<IIntQueryOperatorInput>;
  readonly nlink?: Maybe<IIntQueryOperatorInput>;
  readonly uid?: Maybe<IIntQueryOperatorInput>;
  readonly gid?: Maybe<IIntQueryOperatorInput>;
  readonly rdev?: Maybe<IIntQueryOperatorInput>;
  readonly blksize?: Maybe<IIntQueryOperatorInput>;
  readonly ino?: Maybe<IIntQueryOperatorInput>;
  readonly blocks?: Maybe<IIntQueryOperatorInput>;
  readonly atimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  readonly atime?: Maybe<IDateQueryOperatorInput>;
  readonly mtime?: Maybe<IDateQueryOperatorInput>;
  readonly ctime?: Maybe<IDateQueryOperatorInput>;
  readonly publicURL?: Maybe<IStringQueryOperatorInput>;
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
  readonly childMarkdownRemark?: Maybe<IMarkdownRemarkFilterInput>;
};

export type IFileGroupConnection = {
  __typename?: 'FileGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IFileEdge>;
  readonly nodes: ReadonlyArray<IFile>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type IFileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<IFileFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type IFloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export const enum IImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export const enum IImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
}

export const enum IImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export type IImageSharp = INode & {
  __typename?: 'ImageSharp';
  readonly id: Scalars['ID'];
  readonly fixed?: Maybe<IImageSharpFixed>;
  readonly resolutions?: Maybe<IImageSharpResolutions>;
  readonly fluid?: Maybe<IImageSharpFluid>;
  readonly sizes?: Maybe<IImageSharpSizes>;
  readonly original?: Maybe<IImageSharpOriginal>;
  readonly resize?: Maybe<IImageSharpResize>;
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
};

export type IImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type IImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type IImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type IImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<IDuotoneGradient>;
  traceSVG?: Maybe<IPotrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type IImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<IDuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<IPotrace>;
  toFormat?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type IImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IImageSharpEdge>;
  readonly nodes: ReadonlyArray<IImageSharp>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<IImageSharpGroupConnection>;
};

export type IImageSharpConnectionDistinctArgs = {
  field: IImageSharpFieldsEnum;
};

export type IImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IImageSharpFieldsEnum;
};

export type IImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<IImageSharp>;
  readonly node: IImageSharp;
  readonly previous?: Maybe<IImageSharp>;
};

export const enum IImageSharpFieldsEnum {
  ID = 'id',
  FIXED___BASE64 = 'fixed___base64',
  FIXED___TRACEDSVG = 'fixed___tracedSVG',
  FIXED___ASPECTRATIO = 'fixed___aspectRatio',
  FIXED___WIDTH = 'fixed___width',
  FIXED___HEIGHT = 'fixed___height',
  FIXED___SRC = 'fixed___src',
  FIXED___SRCSET = 'fixed___srcSet',
  FIXED___SRCWEBP = 'fixed___srcWebp',
  FIXED___SRCSETWEBP = 'fixed___srcSetWebp',
  FIXED___ORIGINALNAME = 'fixed___originalName',
  RESOLUTIONS___BASE64 = 'resolutions___base64',
  RESOLUTIONS___TRACEDSVG = 'resolutions___tracedSVG',
  RESOLUTIONS___ASPECTRATIO = 'resolutions___aspectRatio',
  RESOLUTIONS___WIDTH = 'resolutions___width',
  RESOLUTIONS___HEIGHT = 'resolutions___height',
  RESOLUTIONS___SRC = 'resolutions___src',
  RESOLUTIONS___SRCSET = 'resolutions___srcSet',
  RESOLUTIONS___SRCWEBP = 'resolutions___srcWebp',
  RESOLUTIONS___SRCSETWEBP = 'resolutions___srcSetWebp',
  RESOLUTIONS___ORIGINALNAME = 'resolutions___originalName',
  FLUID___BASE64 = 'fluid___base64',
  FLUID___TRACEDSVG = 'fluid___tracedSVG',
  FLUID___ASPECTRATIO = 'fluid___aspectRatio',
  FLUID___SRC = 'fluid___src',
  FLUID___SRCSET = 'fluid___srcSet',
  FLUID___SRCWEBP = 'fluid___srcWebp',
  FLUID___SRCSETWEBP = 'fluid___srcSetWebp',
  FLUID___SIZES = 'fluid___sizes',
  FLUID___ORIGINALIMG = 'fluid___originalImg',
  FLUID___ORIGINALNAME = 'fluid___originalName',
  FLUID___PRESENTATIONWIDTH = 'fluid___presentationWidth',
  FLUID___PRESENTATIONHEIGHT = 'fluid___presentationHeight',
  SIZES___BASE64 = 'sizes___base64',
  SIZES___TRACEDSVG = 'sizes___tracedSVG',
  SIZES___ASPECTRATIO = 'sizes___aspectRatio',
  SIZES___SRC = 'sizes___src',
  SIZES___SRCSET = 'sizes___srcSet',
  SIZES___SRCWEBP = 'sizes___srcWebp',
  SIZES___SRCSETWEBP = 'sizes___srcSetWebp',
  SIZES___SIZES = 'sizes___sizes',
  SIZES___ORIGINALIMG = 'sizes___originalImg',
  SIZES___ORIGINALNAME = 'sizes___originalName',
  SIZES___PRESENTATIONWIDTH = 'sizes___presentationWidth',
  SIZES___PRESENTATIONHEIGHT = 'sizes___presentationHeight',
  ORIGINAL___WIDTH = 'original___width',
  ORIGINAL___HEIGHT = 'original___height',
  ORIGINAL___SRC = 'original___src',
  RESIZE___SRC = 'resize___src',
  RESIZE___TRACEDSVG = 'resize___tracedSVG',
  RESIZE___WIDTH = 'resize___width',
  RESIZE___HEIGHT = 'resize___height',
  RESIZE___ASPECTRATIO = 'resize___aspectRatio',
  RESIZE___ORIGINALNAME = 'resize___originalName',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
}

export type IImageSharpFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly fixed?: Maybe<IImageSharpFixedFilterInput>;
  readonly resolutions?: Maybe<IImageSharpResolutionsFilterInput>;
  readonly fluid?: Maybe<IImageSharpFluidFilterInput>;
  readonly sizes?: Maybe<IImageSharpSizesFilterInput>;
  readonly original?: Maybe<IImageSharpOriginalFilterInput>;
  readonly resize?: Maybe<IImageSharpResizeFilterInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
};

export type IImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly srcSet?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpFixedFilterInput = {
  readonly base64?: Maybe<IStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<IStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  readonly width?: Maybe<IFloatQueryOperatorInput>;
  readonly height?: Maybe<IFloatQueryOperatorInput>;
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly srcSet?: Maybe<IStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<IStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  readonly originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly srcSet?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes?: Maybe<Scalars['String']>;
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth?: Maybe<Scalars['Int']>;
  readonly presentationHeight?: Maybe<Scalars['Int']>;
};

export type IImageSharpFluidFilterInput = {
  readonly base64?: Maybe<IStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<IStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly srcSet?: Maybe<IStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<IStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  readonly sizes?: Maybe<IStringQueryOperatorInput>;
  readonly originalImg?: Maybe<IStringQueryOperatorInput>;
  readonly originalName?: Maybe<IStringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IIntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IImageSharpEdge>;
  readonly nodes: ReadonlyArray<IImageSharp>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type IImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type IImageSharpOriginalFilterInput = {
  readonly width?: Maybe<IFloatQueryOperatorInput>;
  readonly height?: Maybe<IFloatQueryOperatorInput>;
  readonly src?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResize = {
  __typename?: 'ImageSharpResize';
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpResizeFilterInput = {
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<IStringQueryOperatorInput>;
  readonly width?: Maybe<IIntQueryOperatorInput>;
  readonly height?: Maybe<IIntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  readonly originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly srcSet?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type IImageSharpResolutionsFilterInput = {
  readonly base64?: Maybe<IStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<IStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  readonly width?: Maybe<IFloatQueryOperatorInput>;
  readonly height?: Maybe<IFloatQueryOperatorInput>;
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly srcSet?: Maybe<IStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<IStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  readonly originalName?: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly srcSet?: Maybe<Scalars['String']>;
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes?: Maybe<Scalars['String']>;
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth?: Maybe<Scalars['Int']>;
  readonly presentationHeight?: Maybe<Scalars['Int']>;
};

export type IImageSharpSizesFilterInput = {
  readonly base64?: Maybe<IStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<IStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<IFloatQueryOperatorInput>;
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly srcSet?: Maybe<IStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<IStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<IStringQueryOperatorInput>;
  readonly sizes?: Maybe<IStringQueryOperatorInput>;
  readonly originalImg?: Maybe<IStringQueryOperatorInput>;
  readonly originalName?: Maybe<IStringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<IIntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<IImageSharpFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type IInternal = {
  __typename?: 'Internal';
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type IInternalFilterInput = {
  readonly content?: Maybe<IStringQueryOperatorInput>;
  readonly contentDigest?: Maybe<IStringQueryOperatorInput>;
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly fieldOwners?: Maybe<IStringQueryOperatorInput>;
  readonly ignoreType?: Maybe<IBooleanQueryOperatorInput>;
  readonly mediaType?: Maybe<IStringQueryOperatorInput>;
  readonly owner?: Maybe<IStringQueryOperatorInput>;
  readonly type?: Maybe<IStringQueryOperatorInput>;
};

export type IIntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

export type IJsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>;
  readonly ne?: Maybe<Scalars['JSON']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex?: Maybe<Scalars['JSON']>;
  readonly glob?: Maybe<Scalars['JSON']>;
};

export const enum IMarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
}

export type IMarkdownHeading = {
  __typename?: 'MarkdownHeading';
  readonly value?: Maybe<Scalars['String']>;
  readonly depth?: Maybe<Scalars['Int']>;
};

export type IMarkdownHeadingFilterInput = {
  readonly value?: Maybe<IStringQueryOperatorInput>;
  readonly depth?: Maybe<IIntQueryOperatorInput>;
};

export type IMarkdownHeadingFilterListInput = {
  readonly elemMatch?: Maybe<IMarkdownHeadingFilterInput>;
};

export const enum IMarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type IMarkdownRemark = INode & {
  __typename?: 'MarkdownRemark';
  readonly id: Scalars['ID'];
  readonly frontmatter?: Maybe<IMarkdownRemarkFrontmatter>;
  readonly excerpt?: Maybe<Scalars['String']>;
  readonly rawMarkdownBody?: Maybe<Scalars['String']>;
  readonly fileAbsolutePath?: Maybe<Scalars['String']>;
  readonly fields?: Maybe<IMarkdownRemarkFields>;
  readonly html?: Maybe<Scalars['String']>;
  readonly htmlAst?: Maybe<Scalars['JSON']>;
  readonly excerptAst?: Maybe<Scalars['JSON']>;
  readonly headings?: Maybe<ReadonlyArray<Maybe<IMarkdownHeading>>>;
  readonly timeToRead?: Maybe<Scalars['Int']>;
  readonly tableOfContents?: Maybe<Scalars['String']>;
  readonly wordCount?: Maybe<IMarkdownWordCount>;
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
};

export type IMarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<IMarkdownExcerptFormats>;
};

export type IMarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type IMarkdownRemarkHeadingsArgs = {
  depth?: Maybe<IMarkdownHeadingLevels>;
};

export type IMarkdownRemarkTableOfContentsArgs = {
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IMarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<IMarkdownRemark>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<IMarkdownRemarkGroupConnection>;
};

export type IMarkdownRemarkConnectionDistinctArgs = {
  field: IMarkdownRemarkFieldsEnum;
};

export type IMarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: IMarkdownRemarkFieldsEnum;
};

export type IMarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  readonly next?: Maybe<IMarkdownRemark>;
  readonly node: IMarkdownRemark;
  readonly previous?: Maybe<IMarkdownRemark>;
};

export type IMarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  readonly slug?: Maybe<Scalars['String']>;
};

export const enum IMarkdownRemarkFieldsEnum {
  ID = 'id',
  FRONTMATTER___TITLE = 'frontmatter___title',
  FRONTMATTER___TEMPLATEKEY = 'frontmatter___templateKey',
  FRONTMATTER___META_TITLE = 'frontmatter___meta_title',
  FRONTMATTER___META_DESCRIPTION = 'frontmatter___meta_description',
  FRONTMATTER___HEADING = 'frontmatter___heading',
  FRONTMATTER___DESCRIPTION = 'frontmatter___description',
  FRONTMATTER___OFFERINGS___BLURBS = 'frontmatter___offerings___blurbs',
  FRONTMATTER___OFFERINGS___BLURBS___IMAGE = 'frontmatter___offerings___blurbs___image',
  FRONTMATTER___OFFERINGS___BLURBS___TEXT = 'frontmatter___offerings___blurbs___text',
  FRONTMATTER___TESTIMONIALS = 'frontmatter___testimonials',
  FRONTMATTER___TESTIMONIALS___AUTHOR = 'frontmatter___testimonials___author',
  FRONTMATTER___TESTIMONIALS___QUOTE = 'frontmatter___testimonials___quote',
  FRONTMATTER___SUBTITLE = 'frontmatter___subtitle',
  FRONTMATTER___PRICING___DESCRIPTION = 'frontmatter___pricing___description',
  FRONTMATTER___PRICING___HEADING = 'frontmatter___pricing___heading',
  FRONTMATTER___PRICING___PLANS = 'frontmatter___pricing___plans',
  FRONTMATTER___PRICING___PLANS___DESCRIPTION = 'frontmatter___pricing___plans___description',
  FRONTMATTER___PRICING___PLANS___ITEMS = 'frontmatter___pricing___plans___items',
  FRONTMATTER___PRICING___PLANS___PLAN = 'frontmatter___pricing___plans___plan',
  FRONTMATTER___PRICING___PLANS___PRICE = 'frontmatter___pricing___plans___price',
  FRONTMATTER___SLUG = 'frontmatter___slug',
  FRONTMATTER___DATE = 'frontmatter___date',
  FRONTMATTER___COVER = 'frontmatter___cover',
  FRONTMATTER___TAGS = 'frontmatter___tags',
  EXCERPT = 'excerpt',
  RAWMARKDOWNBODY = 'rawMarkdownBody',
  FILEABSOLUTEPATH = 'fileAbsolutePath',
  FIELDS___SLUG = 'fields___slug',
  HTML = 'html',
  HTMLAST = 'htmlAst',
  EXCERPTAST = 'excerptAst',
  HEADINGS = 'headings',
  HEADINGS___VALUE = 'headings___value',
  HEADINGS___DEPTH = 'headings___depth',
  TIMETOREAD = 'timeToRead',
  TABLEOFCONTENTS = 'tableOfContents',
  WORDCOUNT___PARAGRAPHS = 'wordCount___paragraphs',
  WORDCOUNT___SENTENCES = 'wordCount___sentences',
  WORDCOUNT___WORDS = 'wordCount___words',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
}

export type IMarkdownRemarkFieldsFilterInput = {
  readonly slug?: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly frontmatter?: Maybe<IMarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt?: Maybe<IStringQueryOperatorInput>;
  readonly rawMarkdownBody?: Maybe<IStringQueryOperatorInput>;
  readonly fileAbsolutePath?: Maybe<IStringQueryOperatorInput>;
  readonly fields?: Maybe<IMarkdownRemarkFieldsFilterInput>;
  readonly html?: Maybe<IStringQueryOperatorInput>;
  readonly htmlAst?: Maybe<IJsonQueryOperatorInput>;
  readonly excerptAst?: Maybe<IJsonQueryOperatorInput>;
  readonly headings?: Maybe<IMarkdownHeadingFilterListInput>;
  readonly timeToRead?: Maybe<IIntQueryOperatorInput>;
  readonly tableOfContents?: Maybe<IStringQueryOperatorInput>;
  readonly wordCount?: Maybe<IMarkdownWordCountFilterInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
};

export type IMarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  readonly title?: Maybe<Scalars['String']>;
  readonly templateKey?: Maybe<Scalars['String']>;
  readonly meta_title?: Maybe<Scalars['String']>;
  readonly meta_description?: Maybe<Scalars['String']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly offerings?: Maybe<IMarkdownRemarkFrontmatterOfferings>;
  readonly testimonials?: Maybe<ReadonlyArray<Maybe<IMarkdownRemarkFrontmatterTestimonials>>>;
  readonly subtitle?: Maybe<Scalars['String']>;
  readonly pricing?: Maybe<IMarkdownRemarkFrontmatterPricing>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['Date']>;
  readonly cover?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type IMarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFrontmatterFilterInput = {
  readonly title?: Maybe<IStringQueryOperatorInput>;
  readonly templateKey?: Maybe<IStringQueryOperatorInput>;
  readonly meta_title?: Maybe<IStringQueryOperatorInput>;
  readonly meta_description?: Maybe<IStringQueryOperatorInput>;
  readonly heading?: Maybe<IStringQueryOperatorInput>;
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly offerings?: Maybe<IMarkdownRemarkFrontmatterOfferingsFilterInput>;
  readonly testimonials?: Maybe<IMarkdownRemarkFrontmatterTestimonialsFilterListInput>;
  readonly subtitle?: Maybe<IStringQueryOperatorInput>;
  readonly pricing?: Maybe<IMarkdownRemarkFrontmatterPricingFilterInput>;
  readonly slug?: Maybe<IStringQueryOperatorInput>;
  readonly date?: Maybe<IDateQueryOperatorInput>;
  readonly cover?: Maybe<IStringQueryOperatorInput>;
  readonly tags?: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFrontmatterOfferings = {
  __typename?: 'MarkdownRemarkFrontmatterOfferings';
  readonly blurbs?: Maybe<ReadonlyArray<Maybe<IMarkdownRemarkFrontmatterOfferingsBlurbs>>>;
};

export type IMarkdownRemarkFrontmatterOfferingsBlurbs = {
  __typename?: 'MarkdownRemarkFrontmatterOfferingsBlurbs';
  readonly image?: Maybe<Scalars['String']>;
  readonly text?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFrontmatterOfferingsBlurbsFilterInput = {
  readonly image?: Maybe<IStringQueryOperatorInput>;
  readonly text?: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFrontmatterOfferingsBlurbsFilterListInput = {
  readonly elemMatch?: Maybe<IMarkdownRemarkFrontmatterOfferingsBlurbsFilterInput>;
};

export type IMarkdownRemarkFrontmatterOfferingsFilterInput = {
  readonly blurbs?: Maybe<IMarkdownRemarkFrontmatterOfferingsBlurbsFilterListInput>;
};

export type IMarkdownRemarkFrontmatterPricing = {
  __typename?: 'MarkdownRemarkFrontmatterPricing';
  readonly description?: Maybe<Scalars['String']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly plans?: Maybe<ReadonlyArray<Maybe<IMarkdownRemarkFrontmatterPricingPlans>>>;
};

export type IMarkdownRemarkFrontmatterPricingFilterInput = {
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly heading?: Maybe<IStringQueryOperatorInput>;
  readonly plans?: Maybe<IMarkdownRemarkFrontmatterPricingPlansFilterListInput>;
};

export type IMarkdownRemarkFrontmatterPricingPlans = {
  __typename?: 'MarkdownRemarkFrontmatterPricingPlans';
  readonly description?: Maybe<Scalars['String']>;
  readonly items?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly plan?: Maybe<Scalars['String']>;
  readonly price?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFrontmatterPricingPlansFilterInput = {
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly items?: Maybe<IStringQueryOperatorInput>;
  readonly plan?: Maybe<IStringQueryOperatorInput>;
  readonly price?: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFrontmatterPricingPlansFilterListInput = {
  readonly elemMatch?: Maybe<IMarkdownRemarkFrontmatterPricingPlansFilterInput>;
};

export type IMarkdownRemarkFrontmatterTestimonials = {
  __typename?: 'MarkdownRemarkFrontmatterTestimonials';
  readonly author?: Maybe<Scalars['String']>;
  readonly quote?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFrontmatterTestimonialsFilterInput = {
  readonly author?: Maybe<IStringQueryOperatorInput>;
  readonly quote?: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFrontmatterTestimonialsFilterListInput = {
  readonly elemMatch?: Maybe<IMarkdownRemarkFrontmatterTestimonialsFilterInput>;
};

export type IMarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<IMarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<IMarkdownRemark>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<IMarkdownRemarkFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type IMarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  readonly paragraphs?: Maybe<Scalars['Int']>;
  readonly sentences?: Maybe<Scalars['Int']>;
  readonly words?: Maybe<Scalars['Int']>;
};

export type IMarkdownWordCountFilterInput = {
  readonly paragraphs?: Maybe<IIntQueryOperatorInput>;
  readonly sentences?: Maybe<IIntQueryOperatorInput>;
  readonly words?: Maybe<IIntQueryOperatorInput>;
};

/** Node Interface */
export type INode = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
};

export type INodeFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
};

export type INodeFilterListInput = {
  readonly elemMatch?: Maybe<INodeFilterInput>;
};

export type IPageInfo = {
  __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
};

export type IPotrace = {
  readonly turnPolicy?: Maybe<IPotraceTurnPolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
};

export const enum IPotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export type IQuery = {
  __typename?: 'Query';
  readonly file?: Maybe<IFile>;
  readonly allFile: IFileConnection;
  readonly imageSharp?: Maybe<IImageSharp>;
  readonly allImageSharp: IImageSharpConnection;
  readonly markdownRemark?: Maybe<IMarkdownRemark>;
  readonly allMarkdownRemark: IMarkdownRemarkConnection;
  readonly sitePage?: Maybe<ISitePage>;
  readonly allSitePage: ISitePageConnection;
  readonly sitePlugin?: Maybe<ISitePlugin>;
  readonly allSitePlugin: ISitePluginConnection;
  readonly site?: Maybe<ISite>;
  readonly allSite: ISiteConnection;
  readonly directory?: Maybe<IDirectory>;
  readonly allDirectory: IDirectoryConnection;
};

export type IQueryFileArgs = {
  birthtime?: Maybe<IDateQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  publicURL?: Maybe<IStringQueryOperatorInput>;
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  childMarkdownRemark?: Maybe<IMarkdownRemarkFilterInput>;
};

export type IQueryAllFileArgs = {
  filter?: Maybe<IFileFilterInput>;
  sort?: Maybe<IFileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQueryImageSharpArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  fixed?: Maybe<IImageSharpFixedFilterInput>;
  resolutions?: Maybe<IImageSharpResolutionsFilterInput>;
  fluid?: Maybe<IImageSharpFluidFilterInput>;
  sizes?: Maybe<IImageSharpSizesFilterInput>;
  original?: Maybe<IImageSharpOriginalFilterInput>;
  resize?: Maybe<IImageSharpResizeFilterInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type IQueryAllImageSharpArgs = {
  filter?: Maybe<IImageSharpFilterInput>;
  sort?: Maybe<IImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQueryMarkdownRemarkArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  frontmatter?: Maybe<IMarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<IStringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<IStringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<IStringQueryOperatorInput>;
  fields?: Maybe<IMarkdownRemarkFieldsFilterInput>;
  html?: Maybe<IStringQueryOperatorInput>;
  htmlAst?: Maybe<IJsonQueryOperatorInput>;
  excerptAst?: Maybe<IJsonQueryOperatorInput>;
  headings?: Maybe<IMarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IIntQueryOperatorInput>;
  tableOfContents?: Maybe<IStringQueryOperatorInput>;
  wordCount?: Maybe<IMarkdownWordCountFilterInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
};

export type IQueryAllMarkdownRemarkArgs = {
  filter?: Maybe<IMarkdownRemarkFilterInput>;
  sort?: Maybe<IMarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQuerySitePageArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  path?: Maybe<IStringQueryOperatorInput>;
  internalComponentName?: Maybe<IStringQueryOperatorInput>;
  component?: Maybe<IStringQueryOperatorInput>;
  componentChunkName?: Maybe<IStringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>;
  context?: Maybe<ISitePageContextFilterInput>;
  pluginCreator?: Maybe<ISitePluginFilterInput>;
  pluginCreatorId?: Maybe<IStringQueryOperatorInput>;
  componentPath?: Maybe<IStringQueryOperatorInput>;
};

export type IQueryAllSitePageArgs = {
  filter?: Maybe<ISitePageFilterInput>;
  sort?: Maybe<ISitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQuerySitePluginArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  resolve?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  version?: Maybe<IStringQueryOperatorInput>;
  pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<IStringQueryOperatorInput>;
  browserAPIs?: Maybe<IStringQueryOperatorInput>;
  ssrAPIs?: Maybe<IStringQueryOperatorInput>;
  pluginFilepath?: Maybe<IStringQueryOperatorInput>;
  packageJson?: Maybe<ISitePluginPackageJsonFilterInput>;
};

export type IQueryAllSitePluginArgs = {
  filter?: Maybe<ISitePluginFilterInput>;
  sort?: Maybe<ISitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQuerySiteArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>;
  port?: Maybe<IIntQueryOperatorInput>;
  host?: Maybe<IStringQueryOperatorInput>;
  polyfill?: Maybe<IBooleanQueryOperatorInput>;
  pathPrefix?: Maybe<IStringQueryOperatorInput>;
  buildTime?: Maybe<IDateQueryOperatorInput>;
};

export type IQueryAllSiteArgs = {
  filter?: Maybe<ISiteFilterInput>;
  sort?: Maybe<ISiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type IQueryDirectoryArgs = {
  id?: Maybe<IStringQueryOperatorInput>;
  parent?: Maybe<INodeFilterInput>;
  children?: Maybe<INodeFilterListInput>;
  internal?: Maybe<IInternalFilterInput>;
  sourceInstanceName?: Maybe<IStringQueryOperatorInput>;
  absolutePath?: Maybe<IStringQueryOperatorInput>;
  relativePath?: Maybe<IStringQueryOperatorInput>;
  extension?: Maybe<IStringQueryOperatorInput>;
  size?: Maybe<IIntQueryOperatorInput>;
  prettySize?: Maybe<IStringQueryOperatorInput>;
  modifiedTime?: Maybe<IDateQueryOperatorInput>;
  accessTime?: Maybe<IDateQueryOperatorInput>;
  changeTime?: Maybe<IDateQueryOperatorInput>;
  birthTime?: Maybe<IDateQueryOperatorInput>;
  root?: Maybe<IStringQueryOperatorInput>;
  dir?: Maybe<IStringQueryOperatorInput>;
  base?: Maybe<IStringQueryOperatorInput>;
  ext?: Maybe<IStringQueryOperatorInput>;
  name?: Maybe<IStringQueryOperatorInput>;
  relativeDirectory?: Maybe<IStringQueryOperatorInput>;
  dev?: Maybe<IIntQueryOperatorInput>;
  mode?: Maybe<IIntQueryOperatorInput>;
  nlink?: Maybe<IIntQueryOperatorInput>;
  uid?: Maybe<IIntQueryOperatorInput>;
  gid?: Maybe<IIntQueryOperatorInput>;
  rdev?: Maybe<IIntQueryOperatorInput>;
  blksize?: Maybe<IIntQueryOperatorInput>;
  ino?: Maybe<IIntQueryOperatorInput>;
  blocks?: Maybe<IIntQueryOperatorInput>;
  atimeMs?: Maybe<IFloatQueryOperatorInput>;
  mtimeMs?: Maybe<IFloatQueryOperatorInput>;
  ctimeMs?: Maybe<IFloatQueryOperatorInput>;
  birthtimeMs?: Maybe<IFloatQueryOperatorInput>;
  atime?: Maybe<IDateQueryOperatorInput>;
  mtime?: Maybe<IDateQueryOperatorInput>;
  ctime?: Maybe<IDateQueryOperatorInput>;
  birthtime?: Maybe<IDateQueryOperatorInput>;
};

export type IQueryAllDirectoryArgs = {
  filter?: Maybe<IDirectoryFilterInput>;
  sort?: Maybe<IDirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ISite = INode & {
  __typename?: 'Site';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
  readonly siteMetadata?: Maybe<ISiteSiteMetadata>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly buildTime?: Maybe<Scalars['Date']>;
};

export type ISiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ISiteConnection = {
  __typename?: 'SiteConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISiteEdge>;
  readonly nodes: ReadonlyArray<ISite>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ISiteGroupConnection>;
};

export type ISiteConnectionDistinctArgs = {
  field: ISiteFieldsEnum;
};

export type ISiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISiteFieldsEnum;
};

export type ISiteEdge = {
  __typename?: 'SiteEdge';
  readonly next?: Maybe<ISite>;
  readonly node: ISite;
  readonly previous?: Maybe<ISite>;
};

export const enum ISiteFieldsEnum {
  ID = 'id',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
  SITEMETADATA___TITLE = 'siteMetadata___title',
  SITEMETADATA___SITEURL = 'siteMetadata___siteUrl',
  SITEMETADATA___RSSMETADATA___SITE_URL = 'siteMetadata___rssMetadata___site_url',
  SITEMETADATA___RSSMETADATA___FEED_URL = 'siteMetadata___rssMetadata___feed_url',
  SITEMETADATA___RSSMETADATA___TITLE = 'siteMetadata___rssMetadata___title',
  SITEMETADATA___RSSMETADATA___DESCRIPTION = 'siteMetadata___rssMetadata___description',
  SITEMETADATA___RSSMETADATA___IMAGE_URL = 'siteMetadata___rssMetadata___image_url',
  SITEMETADATA___RSSMETADATA___AUTHOR = 'siteMetadata___rssMetadata___author',
  SITEMETADATA___RSSMETADATA___COPYRIGHT = 'siteMetadata___rssMetadata___copyright',
  PORT = 'port',
  HOST = 'host',
  POLYFILL = 'polyfill',
  PATHPREFIX = 'pathPrefix',
  BUILDTIME = 'buildTime',
}

export type ISiteFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
  readonly siteMetadata?: Maybe<ISiteSiteMetadataFilterInput>;
  readonly port?: Maybe<IIntQueryOperatorInput>;
  readonly host?: Maybe<IStringQueryOperatorInput>;
  readonly polyfill?: Maybe<IBooleanQueryOperatorInput>;
  readonly pathPrefix?: Maybe<IStringQueryOperatorInput>;
  readonly buildTime?: Maybe<IDateQueryOperatorInput>;
};

export type ISiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISiteEdge>;
  readonly nodes: ReadonlyArray<ISite>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePage = INode & {
  __typename?: 'SitePage';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
  readonly path?: Maybe<Scalars['String']>;
  readonly internalComponentName?: Maybe<Scalars['String']>;
  readonly component?: Maybe<Scalars['String']>;
  readonly componentChunkName?: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly context?: Maybe<ISitePageContext>;
  readonly pluginCreator?: Maybe<ISitePlugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
  readonly componentPath?: Maybe<Scalars['String']>;
};

export type ISitePageConnection = {
  __typename?: 'SitePageConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISitePageEdge>;
  readonly nodes: ReadonlyArray<ISitePage>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ISitePageGroupConnection>;
};

export type ISitePageConnectionDistinctArgs = {
  field: ISitePageFieldsEnum;
};

export type ISitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISitePageFieldsEnum;
};

export type ISitePageContext = {
  __typename?: 'SitePageContext';
  readonly group?: Maybe<ReadonlyArray<Maybe<ISitePageContextGroup>>>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly first?: Maybe<Scalars['Boolean']>;
  readonly last?: Maybe<Scalars['Boolean']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly pageCount?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly tag?: Maybe<Scalars['String']>;
};

export type ISitePageContextFilterInput = {
  readonly group?: Maybe<ISitePageContextGroupFilterListInput>;
  readonly pathPrefix?: Maybe<IStringQueryOperatorInput>;
  readonly first?: Maybe<IBooleanQueryOperatorInput>;
  readonly last?: Maybe<IBooleanQueryOperatorInput>;
  readonly index?: Maybe<IIntQueryOperatorInput>;
  readonly pageCount?: Maybe<IIntQueryOperatorInput>;
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly tag?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextGroup = {
  __typename?: 'SitePageContextGroup';
  readonly node?: Maybe<ISitePageContextGroupNode>;
};

export type ISitePageContextGroupFilterInput = {
  readonly node?: Maybe<ISitePageContextGroupNodeFilterInput>;
};

export type ISitePageContextGroupFilterListInput = {
  readonly elemMatch?: Maybe<ISitePageContextGroupFilterInput>;
};

export type ISitePageContextGroupNode = {
  __typename?: 'SitePageContextGroupNode';
  readonly excerpt?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly fields?: Maybe<ISitePageContextGroupNodeFields>;
  readonly frontmatter?: Maybe<ISitePageContextGroupNodeFrontmatter>;
};

export type ISitePageContextGroupNodeFields = {
  __typename?: 'SitePageContextGroupNodeFields';
  readonly slug?: Maybe<Scalars['String']>;
};

export type ISitePageContextGroupNodeFieldsFilterInput = {
  readonly slug?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextGroupNodeFilterInput = {
  readonly excerpt?: Maybe<IStringQueryOperatorInput>;
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly fields?: Maybe<ISitePageContextGroupNodeFieldsFilterInput>;
  readonly frontmatter?: Maybe<ISitePageContextGroupNodeFrontmatterFilterInput>;
};

export type ISitePageContextGroupNodeFrontmatter = {
  __typename?: 'SitePageContextGroupNodeFrontmatter';
  readonly title?: Maybe<Scalars['String']>;
  readonly cover?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly templateKey?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['Date']>;
};

export type ISitePageContextGroupNodeFrontmatterFilterInput = {
  readonly title?: Maybe<IStringQueryOperatorInput>;
  readonly cover?: Maybe<IStringQueryOperatorInput>;
  readonly tags?: Maybe<IStringQueryOperatorInput>;
  readonly templateKey?: Maybe<IStringQueryOperatorInput>;
  readonly date?: Maybe<IDateQueryOperatorInput>;
};

export type ISitePageEdge = {
  __typename?: 'SitePageEdge';
  readonly next?: Maybe<ISitePage>;
  readonly node: ISitePage;
  readonly previous?: Maybe<ISitePage>;
};

export const enum ISitePageFieldsEnum {
  ID = 'id',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
  PATH = 'path',
  INTERNALCOMPONENTNAME = 'internalComponentName',
  COMPONENT = 'component',
  COMPONENTCHUNKNAME = 'componentChunkName',
  ISCREATEDBYSTATEFULCREATEPAGES = 'isCreatedByStatefulCreatePages',
  CONTEXT___GROUP = 'context___group',
  CONTEXT___GROUP___NODE___EXCERPT = 'context___group___node___excerpt',
  CONTEXT___GROUP___NODE___ID = 'context___group___node___id',
  CONTEXT___PATHPREFIX = 'context___pathPrefix',
  CONTEXT___FIRST = 'context___first',
  CONTEXT___LAST = 'context___last',
  CONTEXT___INDEX = 'context___index',
  CONTEXT___PAGECOUNT = 'context___pageCount',
  CONTEXT___ID = 'context___id',
  CONTEXT___TAG = 'context___tag',
  PLUGINCREATOR___ID = 'pluginCreator___id',
  PLUGINCREATOR___PARENT___ID = 'pluginCreator___parent___id',
  PLUGINCREATOR___PARENT___PARENT___ID = 'pluginCreator___parent___parent___id',
  PLUGINCREATOR___PARENT___PARENT___CHILDREN = 'pluginCreator___parent___parent___children',
  PLUGINCREATOR___PARENT___CHILDREN = 'pluginCreator___parent___children',
  PLUGINCREATOR___PARENT___CHILDREN___ID = 'pluginCreator___parent___children___id',
  PLUGINCREATOR___PARENT___CHILDREN___CHILDREN = 'pluginCreator___parent___children___children',
  PLUGINCREATOR___PARENT___INTERNAL___CONTENT = 'pluginCreator___parent___internal___content',
  PLUGINCREATOR___PARENT___INTERNAL___CONTENTDIGEST = 'pluginCreator___parent___internal___contentDigest',
  PLUGINCREATOR___PARENT___INTERNAL___DESCRIPTION = 'pluginCreator___parent___internal___description',
  PLUGINCREATOR___PARENT___INTERNAL___FIELDOWNERS = 'pluginCreator___parent___internal___fieldOwners',
  PLUGINCREATOR___PARENT___INTERNAL___IGNORETYPE = 'pluginCreator___parent___internal___ignoreType',
  PLUGINCREATOR___PARENT___INTERNAL___MEDIATYPE = 'pluginCreator___parent___internal___mediaType',
  PLUGINCREATOR___PARENT___INTERNAL___OWNER = 'pluginCreator___parent___internal___owner',
  PLUGINCREATOR___PARENT___INTERNAL___TYPE = 'pluginCreator___parent___internal___type',
  PLUGINCREATOR___CHILDREN = 'pluginCreator___children',
  PLUGINCREATOR___CHILDREN___ID = 'pluginCreator___children___id',
  PLUGINCREATOR___CHILDREN___PARENT___ID = 'pluginCreator___children___parent___id',
  PLUGINCREATOR___CHILDREN___PARENT___CHILDREN = 'pluginCreator___children___parent___children',
  PLUGINCREATOR___CHILDREN___CHILDREN = 'pluginCreator___children___children',
  PLUGINCREATOR___CHILDREN___CHILDREN___ID = 'pluginCreator___children___children___id',
  PLUGINCREATOR___CHILDREN___CHILDREN___CHILDREN = 'pluginCreator___children___children___children',
  PLUGINCREATOR___CHILDREN___INTERNAL___CONTENT = 'pluginCreator___children___internal___content',
  PLUGINCREATOR___CHILDREN___INTERNAL___CONTENTDIGEST = 'pluginCreator___children___internal___contentDigest',
  PLUGINCREATOR___CHILDREN___INTERNAL___DESCRIPTION = 'pluginCreator___children___internal___description',
  PLUGINCREATOR___CHILDREN___INTERNAL___FIELDOWNERS = 'pluginCreator___children___internal___fieldOwners',
  PLUGINCREATOR___CHILDREN___INTERNAL___IGNORETYPE = 'pluginCreator___children___internal___ignoreType',
  PLUGINCREATOR___CHILDREN___INTERNAL___MEDIATYPE = 'pluginCreator___children___internal___mediaType',
  PLUGINCREATOR___CHILDREN___INTERNAL___OWNER = 'pluginCreator___children___internal___owner',
  PLUGINCREATOR___CHILDREN___INTERNAL___TYPE = 'pluginCreator___children___internal___type',
  PLUGINCREATOR___INTERNAL___CONTENT = 'pluginCreator___internal___content',
  PLUGINCREATOR___INTERNAL___CONTENTDIGEST = 'pluginCreator___internal___contentDigest',
  PLUGINCREATOR___INTERNAL___DESCRIPTION = 'pluginCreator___internal___description',
  PLUGINCREATOR___INTERNAL___FIELDOWNERS = 'pluginCreator___internal___fieldOwners',
  PLUGINCREATOR___INTERNAL___IGNORETYPE = 'pluginCreator___internal___ignoreType',
  PLUGINCREATOR___INTERNAL___MEDIATYPE = 'pluginCreator___internal___mediaType',
  PLUGINCREATOR___INTERNAL___OWNER = 'pluginCreator___internal___owner',
  PLUGINCREATOR___INTERNAL___TYPE = 'pluginCreator___internal___type',
  PLUGINCREATOR___RESOLVE = 'pluginCreator___resolve',
  PLUGINCREATOR___NAME = 'pluginCreator___name',
  PLUGINCREATOR___VERSION = 'pluginCreator___version',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS = 'pluginCreator___pluginOptions___plugins',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___RESOLVE = 'pluginCreator___pluginOptions___plugins___resolve',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___ID = 'pluginCreator___pluginOptions___plugins___id',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___NAME = 'pluginCreator___pluginOptions___plugins___name',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___VERSION = 'pluginCreator___pluginOptions___plugins___version',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___BROWSERAPIS = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___SSRAPIS = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PLUGINCREATOR___PLUGINOPTIONS___PLUGINS___PLUGINFILEPATH = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PLUGINCREATOR___PLUGINOPTIONS___PATH = 'pluginCreator___pluginOptions___path',
  PLUGINCREATOR___PLUGINOPTIONS___NAME = 'pluginCreator___pluginOptions___name',
  PLUGINCREATOR___PLUGINOPTIONS___MAXWIDTH = 'pluginCreator___pluginOptions___maxWidth',
  PLUGINCREATOR___PLUGINOPTIONS___DESTINATIONDIR = 'pluginCreator___pluginOptions___destinationDir',
  PLUGINCREATOR___PLUGINOPTIONS___MODULEPATH = 'pluginCreator___pluginOptions___modulePath',
  PLUGINCREATOR___PLUGINOPTIONS___ENABLEIDENTITYWIDGET = 'pluginCreator___pluginOptions___enableIdentityWidget',
  PLUGINCREATOR___PLUGINOPTIONS___HTMLTITLE = 'pluginCreator___pluginOptions___htmlTitle',
  PLUGINCREATOR___PLUGINOPTIONS___COLOR = 'pluginCreator___pluginOptions___color',
  PLUGINCREATOR___PLUGINOPTIONS___SHOWSPINNER = 'pluginCreator___pluginOptions___showSpinner',
  PLUGINCREATOR___PLUGINOPTIONS___ID = 'pluginCreator___pluginOptions___id',
  PLUGINCREATOR___PLUGINOPTIONS___INCLUDEINDEVELOPMENT = 'pluginCreator___pluginOptions___includeInDevelopment',
  PLUGINCREATOR___PLUGINOPTIONS___SHORT_NAME = 'pluginCreator___pluginOptions___short_name',
  PLUGINCREATOR___PLUGINOPTIONS___START_URL = 'pluginCreator___pluginOptions___start_url',
  PLUGINCREATOR___PLUGINOPTIONS___BACKGROUND_COLOR = 'pluginCreator___pluginOptions___background_color',
  PLUGINCREATOR___PLUGINOPTIONS___THEME_COLOR = 'pluginCreator___pluginOptions___theme_color',
  PLUGINCREATOR___PLUGINOPTIONS___DISPLAY = 'pluginCreator___pluginOptions___display',
  PLUGINCREATOR___PLUGINOPTIONS___ICONS = 'pluginCreator___pluginOptions___icons',
  PLUGINCREATOR___PLUGINOPTIONS___ICONS___SRC = 'pluginCreator___pluginOptions___icons___src',
  PLUGINCREATOR___PLUGINOPTIONS___ICONS___SIZES = 'pluginCreator___pluginOptions___icons___sizes',
  PLUGINCREATOR___PLUGINOPTIONS___ICONS___TYPE = 'pluginCreator___pluginOptions___icons___type',
  PLUGINCREATOR___PLUGINOPTIONS___QUERY = 'pluginCreator___pluginOptions___query',
  PLUGINCREATOR___PLUGINOPTIONS___FEEDS = 'pluginCreator___pluginOptions___feeds',
  PLUGINCREATOR___PLUGINOPTIONS___FEEDS___QUERY = 'pluginCreator___pluginOptions___feeds___query',
  PLUGINCREATOR___PLUGINOPTIONS___FEEDS___OUTPUT = 'pluginCreator___pluginOptions___feeds___output',
  PLUGINCREATOR___PLUGINOPTIONS___DEVELOP = 'pluginCreator___pluginOptions___develop',
  PLUGINCREATOR___PLUGINOPTIONS___PURGEONLY = 'pluginCreator___pluginOptions___purgeOnly',
  PLUGINCREATOR___PLUGINOPTIONS___PATHCHECK = 'pluginCreator___pluginOptions___pathCheck',
  PLUGINCREATOR___NODEAPIS = 'pluginCreator___nodeAPIs',
  PLUGINCREATOR___BROWSERAPIS = 'pluginCreator___browserAPIs',
  PLUGINCREATOR___SSRAPIS = 'pluginCreator___ssrAPIs',
  PLUGINCREATOR___PLUGINFILEPATH = 'pluginCreator___pluginFilepath',
  PLUGINCREATOR___PACKAGEJSON___NAME = 'pluginCreator___packageJson___name',
  PLUGINCREATOR___PACKAGEJSON___DESCRIPTION = 'pluginCreator___packageJson___description',
  PLUGINCREATOR___PACKAGEJSON___VERSION = 'pluginCreator___packageJson___version',
  PLUGINCREATOR___PACKAGEJSON___MAIN = 'pluginCreator___packageJson___main',
  PLUGINCREATOR___PACKAGEJSON___AUTHOR = 'pluginCreator___packageJson___author',
  PLUGINCREATOR___PACKAGEJSON___LICENSE = 'pluginCreator___packageJson___license',
  PLUGINCREATOR___PACKAGEJSON___DEPENDENCIES = 'pluginCreator___packageJson___dependencies',
  PLUGINCREATOR___PACKAGEJSON___DEPENDENCIES___NAME = 'pluginCreator___packageJson___dependencies___name',
  PLUGINCREATOR___PACKAGEJSON___DEPENDENCIES___VERSION = 'pluginCreator___packageJson___dependencies___version',
  PLUGINCREATOR___PACKAGEJSON___DEVDEPENDENCIES = 'pluginCreator___packageJson___devDependencies',
  PLUGINCREATOR___PACKAGEJSON___DEVDEPENDENCIES___NAME = 'pluginCreator___packageJson___devDependencies___name',
  PLUGINCREATOR___PACKAGEJSON___DEVDEPENDENCIES___VERSION = 'pluginCreator___packageJson___devDependencies___version',
  PLUGINCREATOR___PACKAGEJSON___PEERDEPENDENCIES = 'pluginCreator___packageJson___peerDependencies',
  PLUGINCREATOR___PACKAGEJSON___PEERDEPENDENCIES___NAME = 'pluginCreator___packageJson___peerDependencies___name',
  PLUGINCREATOR___PACKAGEJSON___PEERDEPENDENCIES___VERSION = 'pluginCreator___packageJson___peerDependencies___version',
  PLUGINCREATOR___PACKAGEJSON___KEYWORDS = 'pluginCreator___packageJson___keywords',
  PLUGINCREATORID = 'pluginCreatorId',
  COMPONENTPATH = 'componentPath',
}

export type ISitePageFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
  readonly path?: Maybe<IStringQueryOperatorInput>;
  readonly internalComponentName?: Maybe<IStringQueryOperatorInput>;
  readonly component?: Maybe<IStringQueryOperatorInput>;
  readonly componentChunkName?: Maybe<IStringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<IBooleanQueryOperatorInput>;
  readonly context?: Maybe<ISitePageContextFilterInput>;
  readonly pluginCreator?: Maybe<ISitePluginFilterInput>;
  readonly pluginCreatorId?: Maybe<IStringQueryOperatorInput>;
  readonly componentPath?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISitePageEdge>;
  readonly nodes: ReadonlyArray<ISitePage>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ISitePageFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type ISitePlugin = INode & {
  __typename?: 'SitePlugin';
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<INode>;
  readonly children: ReadonlyArray<INode>;
  readonly internal: IInternal;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<ISitePluginPluginOptions>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly packageJson?: Maybe<ISitePluginPackageJson>;
};

export type ISitePluginConnection = {
  __typename?: 'SitePluginConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISitePluginEdge>;
  readonly nodes: ReadonlyArray<ISitePlugin>;
  readonly pageInfo: IPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ISitePluginGroupConnection>;
};

export type ISitePluginConnectionDistinctArgs = {
  field: ISitePluginFieldsEnum;
};

export type ISitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ISitePluginFieldsEnum;
};

export type ISitePluginEdge = {
  __typename?: 'SitePluginEdge';
  readonly next?: Maybe<ISitePlugin>;
  readonly node: ISitePlugin;
  readonly previous?: Maybe<ISitePlugin>;
};

export const enum ISitePluginFieldsEnum {
  ID = 'id',
  PARENT___ID = 'parent___id',
  PARENT___PARENT___ID = 'parent___parent___id',
  PARENT___PARENT___PARENT___ID = 'parent___parent___parent___id',
  PARENT___PARENT___PARENT___CHILDREN = 'parent___parent___parent___children',
  PARENT___PARENT___CHILDREN = 'parent___parent___children',
  PARENT___PARENT___CHILDREN___ID = 'parent___parent___children___id',
  PARENT___PARENT___CHILDREN___CHILDREN = 'parent___parent___children___children',
  PARENT___PARENT___INTERNAL___CONTENT = 'parent___parent___internal___content',
  PARENT___PARENT___INTERNAL___CONTENTDIGEST = 'parent___parent___internal___contentDigest',
  PARENT___PARENT___INTERNAL___DESCRIPTION = 'parent___parent___internal___description',
  PARENT___PARENT___INTERNAL___FIELDOWNERS = 'parent___parent___internal___fieldOwners',
  PARENT___PARENT___INTERNAL___IGNORETYPE = 'parent___parent___internal___ignoreType',
  PARENT___PARENT___INTERNAL___MEDIATYPE = 'parent___parent___internal___mediaType',
  PARENT___PARENT___INTERNAL___OWNER = 'parent___parent___internal___owner',
  PARENT___PARENT___INTERNAL___TYPE = 'parent___parent___internal___type',
  PARENT___CHILDREN = 'parent___children',
  PARENT___CHILDREN___ID = 'parent___children___id',
  PARENT___CHILDREN___PARENT___ID = 'parent___children___parent___id',
  PARENT___CHILDREN___PARENT___CHILDREN = 'parent___children___parent___children',
  PARENT___CHILDREN___CHILDREN = 'parent___children___children',
  PARENT___CHILDREN___CHILDREN___ID = 'parent___children___children___id',
  PARENT___CHILDREN___CHILDREN___CHILDREN = 'parent___children___children___children',
  PARENT___CHILDREN___INTERNAL___CONTENT = 'parent___children___internal___content',
  PARENT___CHILDREN___INTERNAL___CONTENTDIGEST = 'parent___children___internal___contentDigest',
  PARENT___CHILDREN___INTERNAL___DESCRIPTION = 'parent___children___internal___description',
  PARENT___CHILDREN___INTERNAL___FIELDOWNERS = 'parent___children___internal___fieldOwners',
  PARENT___CHILDREN___INTERNAL___IGNORETYPE = 'parent___children___internal___ignoreType',
  PARENT___CHILDREN___INTERNAL___MEDIATYPE = 'parent___children___internal___mediaType',
  PARENT___CHILDREN___INTERNAL___OWNER = 'parent___children___internal___owner',
  PARENT___CHILDREN___INTERNAL___TYPE = 'parent___children___internal___type',
  PARENT___INTERNAL___CONTENT = 'parent___internal___content',
  PARENT___INTERNAL___CONTENTDIGEST = 'parent___internal___contentDigest',
  PARENT___INTERNAL___DESCRIPTION = 'parent___internal___description',
  PARENT___INTERNAL___FIELDOWNERS = 'parent___internal___fieldOwners',
  PARENT___INTERNAL___IGNORETYPE = 'parent___internal___ignoreType',
  PARENT___INTERNAL___MEDIATYPE = 'parent___internal___mediaType',
  PARENT___INTERNAL___OWNER = 'parent___internal___owner',
  PARENT___INTERNAL___TYPE = 'parent___internal___type',
  CHILDREN = 'children',
  CHILDREN___ID = 'children___id',
  CHILDREN___PARENT___ID = 'children___parent___id',
  CHILDREN___PARENT___PARENT___ID = 'children___parent___parent___id',
  CHILDREN___PARENT___PARENT___CHILDREN = 'children___parent___parent___children',
  CHILDREN___PARENT___CHILDREN = 'children___parent___children',
  CHILDREN___PARENT___CHILDREN___ID = 'children___parent___children___id',
  CHILDREN___PARENT___CHILDREN___CHILDREN = 'children___parent___children___children',
  CHILDREN___PARENT___INTERNAL___CONTENT = 'children___parent___internal___content',
  CHILDREN___PARENT___INTERNAL___CONTENTDIGEST = 'children___parent___internal___contentDigest',
  CHILDREN___PARENT___INTERNAL___DESCRIPTION = 'children___parent___internal___description',
  CHILDREN___PARENT___INTERNAL___FIELDOWNERS = 'children___parent___internal___fieldOwners',
  CHILDREN___PARENT___INTERNAL___IGNORETYPE = 'children___parent___internal___ignoreType',
  CHILDREN___PARENT___INTERNAL___MEDIATYPE = 'children___parent___internal___mediaType',
  CHILDREN___PARENT___INTERNAL___OWNER = 'children___parent___internal___owner',
  CHILDREN___PARENT___INTERNAL___TYPE = 'children___parent___internal___type',
  CHILDREN___CHILDREN = 'children___children',
  CHILDREN___CHILDREN___ID = 'children___children___id',
  CHILDREN___CHILDREN___PARENT___ID = 'children___children___parent___id',
  CHILDREN___CHILDREN___PARENT___CHILDREN = 'children___children___parent___children',
  CHILDREN___CHILDREN___CHILDREN = 'children___children___children',
  CHILDREN___CHILDREN___CHILDREN___ID = 'children___children___children___id',
  CHILDREN___CHILDREN___CHILDREN___CHILDREN = 'children___children___children___children',
  CHILDREN___CHILDREN___INTERNAL___CONTENT = 'children___children___internal___content',
  CHILDREN___CHILDREN___INTERNAL___CONTENTDIGEST = 'children___children___internal___contentDigest',
  CHILDREN___CHILDREN___INTERNAL___DESCRIPTION = 'children___children___internal___description',
  CHILDREN___CHILDREN___INTERNAL___FIELDOWNERS = 'children___children___internal___fieldOwners',
  CHILDREN___CHILDREN___INTERNAL___IGNORETYPE = 'children___children___internal___ignoreType',
  CHILDREN___CHILDREN___INTERNAL___MEDIATYPE = 'children___children___internal___mediaType',
  CHILDREN___CHILDREN___INTERNAL___OWNER = 'children___children___internal___owner',
  CHILDREN___CHILDREN___INTERNAL___TYPE = 'children___children___internal___type',
  CHILDREN___INTERNAL___CONTENT = 'children___internal___content',
  CHILDREN___INTERNAL___CONTENTDIGEST = 'children___internal___contentDigest',
  CHILDREN___INTERNAL___DESCRIPTION = 'children___internal___description',
  CHILDREN___INTERNAL___FIELDOWNERS = 'children___internal___fieldOwners',
  CHILDREN___INTERNAL___IGNORETYPE = 'children___internal___ignoreType',
  CHILDREN___INTERNAL___MEDIATYPE = 'children___internal___mediaType',
  CHILDREN___INTERNAL___OWNER = 'children___internal___owner',
  CHILDREN___INTERNAL___TYPE = 'children___internal___type',
  INTERNAL___CONTENT = 'internal___content',
  INTERNAL___CONTENTDIGEST = 'internal___contentDigest',
  INTERNAL___DESCRIPTION = 'internal___description',
  INTERNAL___FIELDOWNERS = 'internal___fieldOwners',
  INTERNAL___IGNORETYPE = 'internal___ignoreType',
  INTERNAL___MEDIATYPE = 'internal___mediaType',
  INTERNAL___OWNER = 'internal___owner',
  INTERNAL___TYPE = 'internal___type',
  RESOLVE = 'resolve',
  NAME = 'name',
  VERSION = 'version',
  PLUGINOPTIONS___PLUGINS = 'pluginOptions___plugins',
  PLUGINOPTIONS___PLUGINS___RESOLVE = 'pluginOptions___plugins___resolve',
  PLUGINOPTIONS___PLUGINS___ID = 'pluginOptions___plugins___id',
  PLUGINOPTIONS___PLUGINS___NAME = 'pluginOptions___plugins___name',
  PLUGINOPTIONS___PLUGINS___VERSION = 'pluginOptions___plugins___version',
  PLUGINOPTIONS___PLUGINS___PLUGINOPTIONS___NAME = 'pluginOptions___plugins___pluginOptions___name',
  PLUGINOPTIONS___PLUGINS___PLUGINOPTIONS___MAXWIDTH = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PLUGINOPTIONS___PLUGINS___PLUGINOPTIONS___DESTINATIONDIR = 'pluginOptions___plugins___pluginOptions___destinationDir',
  PLUGINOPTIONS___PLUGINS___BROWSERAPIS = 'pluginOptions___plugins___browserAPIs',
  PLUGINOPTIONS___PLUGINS___SSRAPIS = 'pluginOptions___plugins___ssrAPIs',
  PLUGINOPTIONS___PLUGINS___PLUGINFILEPATH = 'pluginOptions___plugins___pluginFilepath',
  PLUGINOPTIONS___PATH = 'pluginOptions___path',
  PLUGINOPTIONS___NAME = 'pluginOptions___name',
  PLUGINOPTIONS___MAXWIDTH = 'pluginOptions___maxWidth',
  PLUGINOPTIONS___DESTINATIONDIR = 'pluginOptions___destinationDir',
  PLUGINOPTIONS___MODULEPATH = 'pluginOptions___modulePath',
  PLUGINOPTIONS___ENABLEIDENTITYWIDGET = 'pluginOptions___enableIdentityWidget',
  PLUGINOPTIONS___HTMLTITLE = 'pluginOptions___htmlTitle',
  PLUGINOPTIONS___COLOR = 'pluginOptions___color',
  PLUGINOPTIONS___SHOWSPINNER = 'pluginOptions___showSpinner',
  PLUGINOPTIONS___ID = 'pluginOptions___id',
  PLUGINOPTIONS___INCLUDEINDEVELOPMENT = 'pluginOptions___includeInDevelopment',
  PLUGINOPTIONS___SHORT_NAME = 'pluginOptions___short_name',
  PLUGINOPTIONS___START_URL = 'pluginOptions___start_url',
  PLUGINOPTIONS___BACKGROUND_COLOR = 'pluginOptions___background_color',
  PLUGINOPTIONS___THEME_COLOR = 'pluginOptions___theme_color',
  PLUGINOPTIONS___DISPLAY = 'pluginOptions___display',
  PLUGINOPTIONS___ICONS = 'pluginOptions___icons',
  PLUGINOPTIONS___ICONS___SRC = 'pluginOptions___icons___src',
  PLUGINOPTIONS___ICONS___SIZES = 'pluginOptions___icons___sizes',
  PLUGINOPTIONS___ICONS___TYPE = 'pluginOptions___icons___type',
  PLUGINOPTIONS___QUERY = 'pluginOptions___query',
  PLUGINOPTIONS___FEEDS = 'pluginOptions___feeds',
  PLUGINOPTIONS___FEEDS___QUERY = 'pluginOptions___feeds___query',
  PLUGINOPTIONS___FEEDS___OUTPUT = 'pluginOptions___feeds___output',
  PLUGINOPTIONS___DEVELOP = 'pluginOptions___develop',
  PLUGINOPTIONS___PURGEONLY = 'pluginOptions___purgeOnly',
  PLUGINOPTIONS___PATHCHECK = 'pluginOptions___pathCheck',
  NODEAPIS = 'nodeAPIs',
  BROWSERAPIS = 'browserAPIs',
  SSRAPIS = 'ssrAPIs',
  PLUGINFILEPATH = 'pluginFilepath',
  PACKAGEJSON___NAME = 'packageJson___name',
  PACKAGEJSON___DESCRIPTION = 'packageJson___description',
  PACKAGEJSON___VERSION = 'packageJson___version',
  PACKAGEJSON___MAIN = 'packageJson___main',
  PACKAGEJSON___AUTHOR = 'packageJson___author',
  PACKAGEJSON___LICENSE = 'packageJson___license',
  PACKAGEJSON___DEPENDENCIES = 'packageJson___dependencies',
  PACKAGEJSON___DEPENDENCIES___NAME = 'packageJson___dependencies___name',
  PACKAGEJSON___DEPENDENCIES___VERSION = 'packageJson___dependencies___version',
  PACKAGEJSON___DEVDEPENDENCIES = 'packageJson___devDependencies',
  PACKAGEJSON___DEVDEPENDENCIES___NAME = 'packageJson___devDependencies___name',
  PACKAGEJSON___DEVDEPENDENCIES___VERSION = 'packageJson___devDependencies___version',
  PACKAGEJSON___PEERDEPENDENCIES = 'packageJson___peerDependencies',
  PACKAGEJSON___PEERDEPENDENCIES___NAME = 'packageJson___peerDependencies___name',
  PACKAGEJSON___PEERDEPENDENCIES___VERSION = 'packageJson___peerDependencies___version',
  PACKAGEJSON___KEYWORDS = 'packageJson___keywords',
}

export type ISitePluginFilterInput = {
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly parent?: Maybe<INodeFilterInput>;
  readonly children?: Maybe<INodeFilterListInput>;
  readonly internal?: Maybe<IInternalFilterInput>;
  readonly resolve?: Maybe<IStringQueryOperatorInput>;
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<ISitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs?: Maybe<IStringQueryOperatorInput>;
  readonly browserAPIs?: Maybe<IStringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<IStringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<IStringQueryOperatorInput>;
  readonly packageJson?: Maybe<ISitePluginPackageJsonFilterInput>;
};

export type ISitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ISitePluginEdge>;
  readonly nodes: ReadonlyArray<ISitePlugin>;
  readonly pageInfo: IPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<ISitePluginPackageJsonDependencies>>>;
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<ISitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<ISitePluginPackageJsonPeerDependencies>>>;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ISitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPackageJsonDependenciesFilterInput>;
};

export type ISitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPackageJsonDevDependenciesFilterInput>;
};

export type ISitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
  readonly main?: Maybe<IStringQueryOperatorInput>;
  readonly author?: Maybe<IStringQueryOperatorInput>;
  readonly license?: Maybe<IStringQueryOperatorInput>;
  readonly dependencies?: Maybe<ISitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies?: Maybe<ISitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type ISitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  readonly plugins?: Maybe<ReadonlyArray<Maybe<ISitePluginPluginOptionsPlugins>>>;
  readonly path?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly maxWidth?: Maybe<Scalars['Int']>;
  readonly destinationDir?: Maybe<Scalars['String']>;
  readonly modulePath?: Maybe<Scalars['String']>;
  readonly enableIdentityWidget?: Maybe<Scalars['Boolean']>;
  readonly htmlTitle?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly showSpinner?: Maybe<Scalars['Boolean']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly includeInDevelopment?: Maybe<Scalars['Boolean']>;
  readonly short_name?: Maybe<Scalars['String']>;
  readonly start_url?: Maybe<Scalars['String']>;
  readonly background_color?: Maybe<Scalars['String']>;
  readonly theme_color?: Maybe<Scalars['String']>;
  readonly display?: Maybe<Scalars['String']>;
  readonly icons?: Maybe<ReadonlyArray<Maybe<ISitePluginPluginOptionsIcons>>>;
  readonly query?: Maybe<Scalars['String']>;
  readonly feeds?: Maybe<ReadonlyArray<Maybe<ISitePluginPluginOptionsFeeds>>>;
  readonly develop?: Maybe<Scalars['Boolean']>;
  readonly purgeOnly?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
};

export type ISitePluginPluginOptionsFeeds = {
  __typename?: 'SitePluginPluginOptionsFeeds';
  readonly query?: Maybe<Scalars['String']>;
  readonly output?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsFeedsFilterInput = {
  readonly query?: Maybe<IStringQueryOperatorInput>;
  readonly output?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPluginOptionsFeedsFilterInput>;
};

export type ISitePluginPluginOptionsFilterInput = {
  readonly plugins?: Maybe<ISitePluginPluginOptionsPluginsFilterListInput>;
  readonly path?: Maybe<IStringQueryOperatorInput>;
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly maxWidth?: Maybe<IIntQueryOperatorInput>;
  readonly destinationDir?: Maybe<IStringQueryOperatorInput>;
  readonly modulePath?: Maybe<IStringQueryOperatorInput>;
  readonly enableIdentityWidget?: Maybe<IBooleanQueryOperatorInput>;
  readonly htmlTitle?: Maybe<IStringQueryOperatorInput>;
  readonly color?: Maybe<IStringQueryOperatorInput>;
  readonly showSpinner?: Maybe<IBooleanQueryOperatorInput>;
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly includeInDevelopment?: Maybe<IBooleanQueryOperatorInput>;
  readonly short_name?: Maybe<IStringQueryOperatorInput>;
  readonly start_url?: Maybe<IStringQueryOperatorInput>;
  readonly background_color?: Maybe<IStringQueryOperatorInput>;
  readonly theme_color?: Maybe<IStringQueryOperatorInput>;
  readonly display?: Maybe<IStringQueryOperatorInput>;
  readonly icons?: Maybe<ISitePluginPluginOptionsIconsFilterListInput>;
  readonly query?: Maybe<IStringQueryOperatorInput>;
  readonly feeds?: Maybe<ISitePluginPluginOptionsFeedsFilterListInput>;
  readonly develop?: Maybe<IBooleanQueryOperatorInput>;
  readonly purgeOnly?: Maybe<IStringQueryOperatorInput>;
  readonly pathCheck?: Maybe<IBooleanQueryOperatorInput>;
};

export type ISitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  readonly src?: Maybe<Scalars['String']>;
  readonly sizes?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsIconsFilterInput = {
  readonly src?: Maybe<IStringQueryOperatorInput>;
  readonly sizes?: Maybe<IStringQueryOperatorInput>;
  readonly type?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsIconsFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPluginOptionsIconsFilterInput>;
};

export type ISitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  readonly resolve?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<ISitePluginPluginOptionsPluginsPluginOptions>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve?: Maybe<IStringQueryOperatorInput>;
  readonly id?: Maybe<IStringQueryOperatorInput>;
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly version?: Maybe<IStringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<ISitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly browserAPIs?: Maybe<IStringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<IStringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch?: Maybe<ISitePluginPluginOptionsPluginsFilterInput>;
};

export type ISitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  readonly name?: Maybe<Scalars['String']>;
  readonly maxWidth?: Maybe<Scalars['Int']>;
  readonly destinationDir?: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly name?: Maybe<IStringQueryOperatorInput>;
  readonly maxWidth?: Maybe<IIntQueryOperatorInput>;
  readonly destinationDir?: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ISitePluginFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export type ISiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  readonly title?: Maybe<Scalars['String']>;
  readonly siteUrl?: Maybe<Scalars['String']>;
  readonly rssMetadata?: Maybe<ISiteSiteMetadataRssMetadata>;
};

export type ISiteSiteMetadataFilterInput = {
  readonly title?: Maybe<IStringQueryOperatorInput>;
  readonly siteUrl?: Maybe<IStringQueryOperatorInput>;
  readonly rssMetadata?: Maybe<ISiteSiteMetadataRssMetadataFilterInput>;
};

export type ISiteSiteMetadataRssMetadata = {
  __typename?: 'SiteSiteMetadataRssMetadata';
  readonly site_url?: Maybe<Scalars['String']>;
  readonly feed_url?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image_url?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly copyright?: Maybe<Scalars['String']>;
};

export type ISiteSiteMetadataRssMetadataFilterInput = {
  readonly site_url?: Maybe<IStringQueryOperatorInput>;
  readonly feed_url?: Maybe<IStringQueryOperatorInput>;
  readonly title?: Maybe<IStringQueryOperatorInput>;
  readonly description?: Maybe<IStringQueryOperatorInput>;
  readonly image_url?: Maybe<IStringQueryOperatorInput>;
  readonly author?: Maybe<IStringQueryOperatorInput>;
  readonly copyright?: Maybe<IStringQueryOperatorInput>;
};

export type ISiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ISiteFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<ISortOrderEnum>>>;
};

export const enum ISortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type IStringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};
