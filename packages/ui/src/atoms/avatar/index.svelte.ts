import { Context } from '~/lib';
import type { ReadonlyBox, WithRefOpts, WritableBox } from '~/shared/types';
import type { AvatarImageLoadingStatus } from './types';
import type { HTMLImgAttributes } from 'svelte/elements';
import { isNil } from '~/shared/utils';

export const AvatarRootStateContext = new Context<AvatarRootState>('Avatar.Root');

interface AvatarRootStateOptions extends WithRefOpts {
  delayMs: ReadonlyBox<number>;
  loadingStatus: WritableBox<AvatarImageLoadingStatus>;
}

export class AvatarRootState {
  readonly opts: AvatarRootStateOptions;

  constructor(opts: AvatarRootStateOptions) {
    this.opts = opts;
    this.loadImage = this.loadImage.bind(this);
  }

  loadImage(
    src: string,
    crossOrigin: HTMLImgAttributes['crossorigin'],
    referrerPolicy: HTMLImgAttributes['referrerpolicy']
  ) {
    // if already loaded, do nothing
    if (this.opts.loadingStatus.current === 'success') return;

    let imageTimerId: number | undefined;

    const image = new Image();

    image.src = src;
    if (!isNil(crossOrigin)) image.crossOrigin = crossOrigin;
    if (!isNil(referrerPolicy)) image.referrerPolicy = referrerPolicy;

    this.opts.loadingStatus.current = 'loading';

    image.onload = () => {
      imageTimerId = setTimeout(() => {
        this.opts.loadingStatus.current = 'success';
      }, this.opts.delayMs.current);
    };

    image.onerror = () => {
      this.opts.loadingStatus.current = 'error';
    };

    return () => {
      if (!imageTimerId) return;
      clearTimeout(imageTimerId);
    };
  }
}
