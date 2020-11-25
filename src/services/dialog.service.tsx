import Observable from './Observable';

export class DialogRef {
  constructor(
    private readonly _dialogService: DialogService,
    private readonly _id: number
  ) {}

  public close() {
    this._dialogService.closeDialog(this._id);
  }
}

export interface DialogData {}

export default class DialogService extends Observable<DialogData[]> {
  private readonly _openDialogs: { ref: number; data: DialogData }[] = [];
  private _index = 0;

  public showDialog(dialog: {}) {
    const ref = this._index++;

    this._openDialogs.push({ data: dialog, ref });

    this.next(this._openDialogs);

    return new DialogRef(this, ref);
  }

  public closeDialog(dialogId: number) {
    const index = this._openDialogs.findIndex((i) => i.ref === dialogId);

    if (index < 0) {
      throw Error('Dialog not found.');
    }

    this._openDialogs.splice(index, 1);
  }
}
