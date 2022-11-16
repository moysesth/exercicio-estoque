import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarCPF'
})


export class FormatarCpfPipe implements PipeTransform {

  transform(cpf: Number): String {
    let cpfTransformado = cpf.toString();
    return cpfTransformado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
