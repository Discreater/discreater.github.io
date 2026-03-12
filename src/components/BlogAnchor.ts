import type { ArticleHeader } from 'virtual:article';
import type { PropType, VNode } from 'vue';
import { NAnchor, NAnchorLink } from 'naive-ui';
import { defineComponent, h } from 'vue';

function _renderAnchor(headers: ArticleHeader[]): VNode[] {
  return headers.map((header) => {
    return h(NAnchorLink, {
      key: header.slug,
      href: `#${header.slug}`,
      title: header.title,
    }, () => _renderAnchor(header.children));
  });
}

export default defineComponent({
  props: {
    headers: {
      type: Array as PropType<ArticleHeader[]>,
      required: true,
    },
  },
  setup(props) {
    return () => h(
      NAnchor,
      {
        ignoreGap: true,
      },
      () => _renderAnchor(props.headers),
    );
  },
});
