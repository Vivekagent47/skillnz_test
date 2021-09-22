import { Injectable, NotFoundException } from '@nestjs/common';
import { Internship } from '../Models/internship.model'

@Injectable()
export class InternshipService {
  private internShips: Internship[] = [];
  
  insertInternship(position: string, company_name: string) {
    const id = Math.random().toString();
    const newInternship = new Internship(id, position, company_name);

    this.internShips.push(newInternship);
    return id;
  }

  getInternship() {
    return [...this.internShips];
  }

  getSingleInternship(internshipId: string) {
    const internship = this.internShips.find(data => data.id === internshipId);

    if(!internship) {
      throw new NotFoundException("Could not find internship");
    }
    return {...internship}
  }
}