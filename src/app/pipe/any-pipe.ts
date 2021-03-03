import { Pipe, PipeTransform } from '@angular/core';
// import {};
interface IkeyIt {
  title: string;
  text: string;
}

// field: keyof IkeyIt = 'text'
// field: string = 'text'

@Pipe({ name: 'anypipe' })
export class AnyPippe implements PipeTransform {
  transform(
    posts: { title: string; text: string }[],
    filt: string,
    field: keyof IkeyIt = 'text'
  ): { title: string; text: string }[] {
    if (!filt.trim()) {
      return posts;
    }

    return posts.filter((el) =>
      el[field].toLowerCase().includes(filt.toLowerCase())
    );
  }
}
