export class Subscription<T> {
  constructor(
    private readonly _observable: Observable<T>,
    private readonly _callback: (e: T) => void
  ) {}

  public unsubscribe() {
    this._observable.unsubscribe(this._callback);
  }
}

export default class Observable<T> {
  private readonly _subscriptions: ((e: T) => void)[] = [];

  public subscribe(callback: (e: T) => void) {
    this._subscriptions.push(callback);
    return new Subscription(this, callback);
  }

  public unsubscribe(callback: (e: T) => void) {
    const index = this._subscriptions.findIndex((i) => i === callback);

    if (index < 0) {
      throw Error('Subscription not found.');
    }

    this._subscriptions.splice(index, 1);
  }

  protected next(e: T) {
    this._subscriptions.forEach((callback) => callback(e));
  }
}
