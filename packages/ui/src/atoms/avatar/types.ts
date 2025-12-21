import type {
  PrimitiveDivAttributes,
  OnChangeFn,
  Without,
  WithChildren,
  PrimitiveImgAttributes
} from '~/shared/types/';

/**
 * Loading state for the avatar component.
 */
export type AvatarImageLoadingStatus = 'success' | 'loading' | 'error';

export type AvatarRootBaseProps = WithChildren<{
  /**
   * The delay in milliseconds to wait before showing the avatar once
   * the image has loaded. This can be used to prevent sudden flickering
   * of the image if it loads quickly.
   */
  delayMs?: number;

  /**
   * The loading status of the image.
   *
   * If you are confident that the image exists and will load successfully, you can
   * set this to `"loaded"` to skip the loading process (which shows the fallback)
   * and immediately show the image.
   *
   * @default "loading"
   */
  loadingStatus?: AvatarImageLoadingStatus;

  /**
   * A callback invoked when the loading status of the image changes.
   */
  onLoadingStatusChange?: OnChangeFn<AvatarImageLoadingStatus>;
}>;

export type AvatarRootProps = AvatarRootBaseProps &
  Without<PrimitiveDivAttributes, AvatarRootBaseProps>;

export type AvatarImageBaseProps = WithChildren;

export type AvatarImageProps = AvatarImageBaseProps &
  Without<PrimitiveImgAttributes, AvatarImageBaseProps>;

export type AvatarFallbackBaseProps = WithChildren;

export type AvatarFallbackProps = AvatarFallbackBaseProps &
  Without<PrimitiveDivAttributes, AvatarFallbackBaseProps>;
