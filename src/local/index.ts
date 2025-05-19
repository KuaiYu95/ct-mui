import { EmptyProps } from '../Empty';
import { ModalProps } from '../Modal/Modal';
import { PaginationProps } from '../Pagination';

export interface Localization {
  components?: {
    CuiPagination?: {
      defaultProps: Pick<
        PaginationProps,
        'getLabelPerPage' | 'labelPages' | 'labelGoTo'
      >;
    };
    CuiModal?: {
      defaultProps: Pick<ModalProps, 'okText' | 'cancelText'>;
    };
    CuiEmpty?: {
      defaultProps: Pick<EmptyProps, 'labelEmpty'>;
    };
  };
}

export const zhCN: Localization = {
  components: {
    CuiPagination: {
      defaultProps: {
        getLabelPerPage: (value) => `条每页, 共 ${value} 条`,
        labelPages: '页',
        labelGoTo: '跳至',
      },
    },
    CuiModal: {
      defaultProps: {
        okText: '确认',
        cancelText: '取消',
      },
    },
    CuiEmpty: {
      defaultProps: {
        labelEmpty: '暂无数据',
      },
    },
  },
};

export const enUS: Localization = {
  components: {
    CuiPagination: {
      defaultProps: {
        getLabelPerPage: (value) => `items per page, total ${value} items`,
        labelPages: 'pages',
        labelGoTo: 'Go to',
      },
    },
    CuiModal: {
      defaultProps: {
        okText: 'Confirm',
        cancelText: 'Cancel',
      },
    },
    CuiEmpty: {
      defaultProps: {
        labelEmpty: 'No data available',
      },
    },
  },
};
